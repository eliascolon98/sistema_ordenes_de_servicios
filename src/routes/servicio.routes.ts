import {Router} from 'express';
import { postServicios, getServicio, getServicios, putServicios } from '../controllers/servicio.controllers';
const router = Router();

router.post('/api/v1/solicitudes',postServicios)
router.get('/api/v1/solicitudes', getServicios)
router.get('/api/v1/tecnicos/:id/solicitudes', getServicio)
router.put('/api/v1/solicitudes/:token', putServicios)

export default router