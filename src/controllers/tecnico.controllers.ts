import { Request, Response } from 'express';
import { Tecnico } from '../database/entities/Tecnico';

// se exporta una función asíncrona que toma dos argumentos: req (una solicitud) y res (una respuesta)
export const postTecnicos = async (req: Request, res: Response) => {
    try {
        // se utiliza destructuring assignment para extraer los campos del cuerpo
        // de la solicitud y asignarlos a variables con el mismo nombre
        const { nombre } = req.body;
        const tecnico = new Tecnico();

        // se asigna el valor del body al campo del modelo
        tecnico.nombre = nombre;

        // se utiliza el método "save" del modelo para guardar el nuevo cliente en la base de datos
        await tecnico.save();

        return res.status(200).json({message: '¡El tecnico se ha registrado exitosamente!'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getTecnicos = async (req: Request, res: Response) => {
    try {
        // se utiliza el método "find" del modelo "Tecnico" para obtener una lista 
        //de todos los clientes de la base de datos
        const tecnicos = await Tecnico.find()

        // se envía una respuesta HTTP con un código de estado 200 y la lista de tecnicos en formato JSON
        return res.json({data: tecnicos});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const putTecnicos = async (req: Request, res: Response) => {
    try {
        // se obtiene el ID del tecnico de los parámetros de la ruta
        const id = req.params.id;

        // se utiliza el método "findOneBy" del modelo "Tecnico" para obtener un tecnico específico de la base de datos. 
        //Se convierte el ID de cadena a número entero para hacer la búsqueda
        const tecnico = await Tecnico.findOneBy({id: parseInt(id)});
        if (!tecnico) return res.status(404).json({message: 'Tecnico no existe, por favor verifique el ID'});

        // se utiliza el método "update" del modelo "Tecnico" para actualizar el tecnico en la base de datos con los nuevos datos del cuerpo de la solicitud.
        // Se convierte el ID de cadena a número entero para hacer la actualización
        await Tecnico.update({id: parseInt(id)}, req.body)
        return res.status(200).json({message: '¡Tecnico actualizado exitosamente!'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const deleteTecnicos = async (req: Request, res: Response) => {
    try {
        // se obtiene el ID del cliente de los parámetros de la ruta
        const id = req.params.id;

        // se utiliza el método "findOneBy" del modelo "Tecnico" para obtener un tecnico específico de la base de datos. 
        //Se convierte el ID de cadena a número entero para hacer la búsqueda
        const tecnico = await Tecnico.findOneBy({id: parseInt(id)});
        if (!tecnico) return res.status(404).json({message: 'Tecnico no existe, por favor verifique el ID'});

        // se utiliza el método "delete" del modelo "Tecnico" para eliminar el tecnico en la base de datos 
        await Tecnico.delete({id: parseInt(id)})
        return res.status(200).json({message: '¡Tecnico eliminado exitosamente!'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getTecnico = async (req: Request, res: Response) => {
    try {
        // se obtiene el ID del cliente de los parámetros de la ruta
        const id = req.params.id;

        // se utiliza el método "findOneBy" del modelo "Tecnico" para obtener un tecnico específico de la base de datos. 
        //Se convierte el ID de cadena a número entero para hacer la búsqueda
        const tecnico = await Tecnico.findOneBy({id: parseInt(id)});
        if (!tecnico) return res.status(404).json({message: 'Tecnico no existe, por favor verifique el ID'});

        // Retornamos el tecnico especifico
        return res.json(tecnico);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}
