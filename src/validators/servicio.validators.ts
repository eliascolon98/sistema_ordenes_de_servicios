import { check } from "express-validator";
import { Request, Response, NextFunction } from 'express';
import { validarResultado } from '../helper/validaciones.helper';


export const validarServicio: any = [
    check('id_cliente')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('descripcion')
        .exists()
        .not()
        .isEmpty(),
        (req:Request, res :Response, next: NextFunction)=>{
            validarResultado(req, res, next);
        },
];
