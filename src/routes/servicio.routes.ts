import {Router} from 'express';
import { postServicios, getServicio, getServicios, putServicios } from '../controllers/servicio.controllers';
import { validarServicio } from '../validators/servicio.validators';

const router = Router();

// se establece una ruta POST para la dirección "/api/v1/solicitudes" que ejecuta la función "postServicios"
router.post('/api/v1/solicitudes',validarServicio, postServicios);
// se establece una ruta GET para la dirección "/api/v1/solicitudes" que ejecuta la función "getServicios"
router.get('/api/v1/solicitudes', getServicios);
// se establece una ruta GET para la dirección "/api/v1/tecnicos/:id/solicitudes" que ejecuta la función "getServicio"
router.get('/api/v1/tecnicos/:id/solicitudes', getServicio);
// se establece una ruta PUT para la dirección "/api/v1/solicitudes/:token" que ejecuta la función "putServicios"
router.put('/api/v1/solicitudes/:token', putServicios) 


// se exporta el enrutador
export default router