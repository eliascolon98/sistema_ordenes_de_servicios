import {Router} from 'express';
import { postTecnicos, getTecnicos, getTecnico, putTecnicos, deleteTecnicos } from '../controllers/tecnico.controllers';
const router = Router();

router.post('/api/v1/tecnicos',postTecnicos)
router.get('/api/v1/tecnicos', getTecnicos)
router.get('/api/v1/tecnicos/:id', getTecnico)
router.put('/api/v1/tecnicos/:id', putTecnicos)
router.delete('/api/v1/tecnicos/:id', deleteTecnicos)


export default router