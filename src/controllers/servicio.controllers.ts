
import { Request, Response } from 'express';
import crypto from 'crypto';
import { Servicio } from '../entities/Servicio';
import { Tecnico } from '../entities/Tecnico';

export const postServicios = async (req: Request, res: Response) => {
    try {

        const { id_cliente, descripcion } = req.body;
        const servicio = new Servicio();
        const token = genearToken();

        // Consultar tecnicos disponibles
        const tecnicos = await Tecnico.find({
            where: {
                disponibilidad: true
            }
        })

        // Creamos un array donde se almacenen los Id de los tecnicos disponibles
        let arrayIdTecnicos = [];
        for (const tecnico of tecnicos) {
            arrayIdTecnicos.push(tecnico.id);
        }

        // Buscamos un Id de forma aleatoria de los tecnicos disponibles
        const randomIndex = Math.floor(Math.random() * arrayIdTecnicos.length);
        const id_tecnico: any = arrayIdTecnicos[randomIndex];

        servicio.token = token;
        servicio.cliente = id_cliente;
        servicio.descripcion = descripcion;
        servicio.tecnico = id_tecnico;
        servicio.estado = "En progreso";

        await servicio.save()

        return res.status(200).json({ message: '¡El servicio se ha registrado exitosamente!' })

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const getServicios = async (req: Request, res: Response) => {
    try {

        const servicios = await Servicio.find({
            select: ['id', 'token', 'estado', 'descripcion'],
            relations: {
                cliente: true,
                tecnico: true,

            },
        });

        const servicesData = servicios.map(servicio => ({
            id: servicio.id,
            token: servicio.token,
            descripcion: servicio.descripcion,
            estado: servicio.estado,
            cliente: servicio.cliente.nombre,
            TecnicoAsigado: servicio.tecnico.nombre,
        }));

        return res.json(servicesData);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const getServicio = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const tecnico = await Tecnico.findOneBy({id: parseInt(id)});
        if (!tecnico) return res.status(404).json({message: 'Tecnico no existe, por favor verifique el ID'});

        const servicios = await Servicio.find({
      
            relations: {
                cliente: true,

            },
            where:{
                tecnico: {id: parseInt(id)},
            }
        });

        const servicesData = servicios.map(servicio => ({
            id: servicio.id,
            token: servicio.token,
            descripcion: servicio.descripcion,
            estado: servicio.estado,
            cliente: servicio.cliente.nombre,
        }));

        if(servicesData.length == 0) return res.status(200).json({message: 'Usted no tiene ningún servicio asignado.'});

        return res.json(servicesData);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}


export const putServicios = async (req: Request, res: Response) => {
    try {

        const token = req.params.token;

      
        const servicio = await Servicio.find({
            where:{
                token: token,
            }
        });

        if (!servicio) return res.status(404).json({ message: 'Servicio no existe, por favor verifique el Token' });

        await Servicio.update({ token: token }, {
            estado: req.body.estado
        });

        return res.status(200).json({ message: 'Estado actualizado exitosamente!' });

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}



export const genearToken = () => {
    return crypto.createHash('sha1').update(Math.random().toString()).digest('hex');
}

