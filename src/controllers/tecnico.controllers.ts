import { Request, Response } from 'express';
import { Tecnico } from '../entities/Tecnico';


export const postTecnicos = async (req: Request, res: Response) => {
    try {
        const { nombre, disponibilidad } = req.body;
        const tecnico = new Tecnico()

        tecnico.nombre = nombre
        tecnico.disponibilidad = disponibilidad
        await tecnico.save()

        return res.status(200).json({message: '¡El tecnico se ha registrado exitosamente!'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getTecnicos = async (req: Request, res: Response) => {
    try {
     
        const tecnicos = await Tecnico.find()
        return res.json(tecnicos);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const putTecnicos = async (req: Request, res: Response) => {
    try {
 
        const id = req.params.id;

        const tecnico = await Tecnico.findOneBy({id: parseInt(id)});
        if (!tecnico) return res.status(404).json({message: 'Tecnico no existe, por favor verifique el ID'});

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
        const id = req.params.id;
        const tecnico = await Tecnico.findOneBy({id: parseInt(id)});
        if (!tecnico) return res.status(404).json({message: 'Tecnico no existe, por favor verifique el ID'});
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
        const id = req.params.id;
        const tecnico = await Tecnico.findOneBy({id: parseInt(id)});
        if (!tecnico) return res.status(404).json({message: 'Tecnico no existe, por favor verifique el ID'});
        return res.json(tecnico);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}
