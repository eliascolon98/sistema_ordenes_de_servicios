import { Request, Response } from 'express';
import { Cliente } from '../database/entities/Cliente';

// se exporta una función asíncrona que toma dos argumentos: req (una solicitud) y res (una respuesta)
export const postClientes = async (req: Request, res: Response) => {
    try {
        // se utiliza destructuring assignment para extraer los campos del cuerpo
        // de la solicitud y asignarlos a variables con el mismo nombre
        const { nombre, direccion, correo, telefono } = req.body;
        const cliente = new Cliente();

        // se asigna el valor del body al campo del modelo
        cliente.nombre = nombre;
        cliente.direccion = direccion;
        cliente.correo = correo;
        cliente.telefono = telefono;

        // se utiliza el método "save" del modelo para guardar el nuevo cliente en la base de datos
        await cliente.save()

        return res.status(200).json({message: '¡El cliente se ha registrado exitosamente!'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getClientes = async (req: Request, res: Response) => {
    try {
         // se utiliza el método "find" del modelo "Cliente" para obtener una lista 
         //de todos los clientes de la base de datos
        const clientes = await Cliente.find()

        // se envía una respuesta HTTP con un código de estado 200 y la lista de clientes en formato JSON
        return res.status(200).json({data: clientes});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const putClientes = async (req: Request, res: Response) => {
    try {
        // se obtiene el ID del cliente de los parámetros de la ruta
        const id = req.params.id;

        // se utiliza el método "findOneBy" del modelo "Cliente" para obtener un cliente específico de la base de datos. 
        //Se convierte el ID de cadena a número entero para hacer la búsqueda
        const cliente = await Cliente.findOneBy({id: parseInt(id)});
        if (!cliente) return res.status(404).json({message: 'Cliente no existe, por favor verifique el ID'});

        // se utiliza el método "update" del modelo "Cliente" para actualizar el cliente en la base de datos con los nuevos datos del cuerpo de la solicitud.
        // Se convierte el ID de cadena a número entero para hacer la actualización
        await Cliente.update({id: parseInt(id)}, {
            nombre : req.body.nombre,
            direccion : req.body.direccion,
            correo : req.body.correo,
            telefono : req.body.telefono,
        })
        return res.status(200).json({message: '¡Cliente actualizado exitosamente!'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const deleteClientes = async (req: Request, res: Response) => {
    try {
         // se obtiene el ID del cliente de los parámetros de la ruta
        const id = req.params.id;

        // se utiliza el método "findOneBy" del modelo "Cliente" para obtener un cliente específico de la base de datos. 
        //Se convierte el ID de cadena a número entero para hacer la búsqueda
        const cliente = await Cliente.findOneBy({id: parseInt(id)});
        if (!cliente) return res.status(404).json({message: 'Cliente no existe, por favor verifique el ID'});

        // se utiliza el método "delete" del modelo "Cliente" para eliminar el cliente en la base de datos 
        await Cliente.delete({id: parseInt(id)})
        return res.status(200).json({message: '¡Cliente eliminado exitosamente!'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getCliente = async (req: Request, res: Response) => {
    try {
         // se obtiene el ID del cliente de los parámetros de la ruta
        const id = req.params.id;

        // se utiliza el método "findOneBy" del modelo "Cliente" para obtener un cliente específico de la base de datos. 
        //Se convierte el ID de cadena a número entero para hacer la búsqueda
        const cliente = await Cliente.findOneBy({id: parseInt(id)});
        if (!cliente) return res.status(404).json({message: 'Cliente no existe, por favor verifique el ID'});

        // Retornamos el Cliente especifico
        return res.status(200).json(cliente);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}
