import { Request, Response } from 'express';
import { Cliente } from '../entities/Cliente';


export const postClientes = async (req: Request, res: Response) => {
    try {
        const { nombre, direccion, correo, telefono } = req.body;
        const cliente = new Cliente()

        cliente.nombre = nombre
        cliente.direccion = direccion
        cliente.correo = correo
        cliente.telefono = telefono

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
     
        const clientes = await Cliente.find()
        return res.json(clientes);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const putClientes = async (req: Request, res: Response) => {
    try {
 
        const id = req.params.id;

        const cliente = await Cliente.findOneBy({id: parseInt(id)});
        if (!cliente) return res.status(404).json({message: 'Cliente no existe, por favor verifique el ID'});

        await Cliente.update({id: parseInt(id)}, req.body)
        return res.status(200).json({message: '¡Cliente actualizado exitosamente!'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const deleteClientes = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const cliente = await Cliente.findOneBy({id: parseInt(id)});
        if (!cliente) return res.status(404).json({message: 'Cliente no existe, por favor verifique el ID'});
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
        const id = req.params.id;
        const cliente = await Cliente.findOneBy({id: parseInt(id)});
        if (!cliente) return res.status(404).json({message: 'Cliente no existe, por favor verifique el ID'});
        return res.json(cliente);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}
