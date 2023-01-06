
import { Request, Response } from 'express';
import crypto from 'crypto';
import { Servicio } from '../entities/Servicio';
import { Tecnico } from '../entities/Tecnico';

export const postServicios = async (req: Request, res: Response) => {
    try {
        
        // Devolver el Id del cliente y la descripción para crear la solicitud de cliente
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

        // Guardamos los datos del servicio
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
            // Seleccionar solo el token, el estado y la descripción
            select: ['id', 'token', 'estado', 'descripcion'],
            // Seleccionar las relaciones con el cliente y el técnico
            relations: {
                cliente: true,
                tecnico: true,

            },
        });

        // Recorremos el servicio para crear un objeto con los datos que mostraremos
        const servicesData = servicios.map(servicio => ({
            id: servicio.id,
            token: servicio.token,
            descripcion: servicio.descripcion,
            estado: servicio.estado,
            cliente: servicio.cliente.nombre,
            TecnicoAsigado: servicio.tecnico.nombre,
        }));

        return res.status(200).json(servicesData);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const getServicio = async (req: Request, res: Response) => {
    try {
        // asignamos el Id del Tecnico a una variable para validar si existe
        const id = req.params.id;

        const tecnico = await Tecnico.findOneBy({id: parseInt(id)});
        if (!tecnico) return res.status(404).json({message: 'Tecnico no existe, por favor verifique el ID'});

        // Seleccionamos la relación cleinte del servicio donde el tecnico sea igual al Id
        const servicios = await Servicio.find({
            relations: {
                cliente: true,

            },
            where:{
                tecnico: {id: parseInt(id)},
            }
        });

        // Recorremos el servicio para crear un objeto con los datos que mostraremos
        const servicesData = servicios.map(servicio => ({
            id: servicio.id,
            token: servicio.token,
            descripcion: servicio.descripcion,
            estado: servicio.estado,
            cliente: servicio.cliente.nombre,
        }));

        // Validamos si el arreglo que trae los servicios del tecnico es igual a 0, quiere decir que no tiene servicios asignados
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

        // Traemos el token para consultar el servicio que queremos actualizar
        const token = req.params.token;

        const servicio = await Servicio.find({
            where:{
                token: token,
            }
        });

        // Validamos que exista el servicio
        if (!servicio) return res.status(404).json({ message: 'Servicio no existe, por favor verifique el Token' });

        //Actualizamos el estado del servicio segun el token recibido
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


// Funcion para generar token 
export const genearToken = () => {
    return crypto.createHash('sha1').update(Math.random().toString()).digest('hex');
}

