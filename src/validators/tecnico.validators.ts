import { check } from "express-validator";
import { Request, Response, NextFunction } from 'express';
import { validarResultado } from '../helper/validaciones.helper';


export const validarTecnico: any = [
    check('nombre')
        .exists()
        .not()
        .isEmpty(),
        (req:Request, res :Response, next: NextFunction)=>{
            validarResultado(req, res, next);
        },
];
