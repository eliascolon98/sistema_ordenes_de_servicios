import { check } from "express-validator";
import { Request, Response, NextFunction } from 'express';
import { validarResultado } from '../helper/validaciones.helper';


export const validarCliente: any = [
    check('nombre')
        .exists()
        .not()
        .isEmpty(),
    check('direccion')
        .exists()
        .not()
        .isEmpty(),
    check('correo')
        .exists()
        .not()
        .isEmpty()
        .isEmail(),
    check('telefono')
        .isLength({ max: 5 })
        .isNumeric()
        .exists()
        .not()
        .isEmpty(),
        (req:Request, res :Response, next: NextFunction)=>{
            validarResultado(req, res, next);
        },
];
