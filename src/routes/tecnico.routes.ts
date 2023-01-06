import {Router} from 'express';
import { postTecnicos, getTecnicos, getTecnico, putTecnicos, deleteTecnicos } from '../controllers/tecnico.controllers';
import { validarTecnico } from '../validators/tecnico.validators';

const router = Router();

// se establece una ruta POST para la dirección "/api/v1/tecnicos" que ejecuta la función "postTecnicos"
router.post('/api/v1/tecnicos',validarTecnico, postTecnicos); 
// se establece una ruta GET para la dirección "/api/v1/tecnicos" que ejecuta la función "getTecnicos"
router.get('/api/v1/tecnicos', getTecnicos); 
// se establece una ruta GET para la dirección "/api/v1/tecnicos/:id" que ejecuta la función "getTecnico"
router.get('/api/v1/tecnicos/:id', getTecnico); 
 // se establece una ruta PUT para la dirección "/api/v1/tecnicos/:id" que ejecuta la función "putTecnicos"
router.put('/api/v1/tecnicos/:id', validarTecnico, putTecnicos);
// se establece una ruta DELETE para la dirección "/api/v1/tecnicos/:id" que ejecuta la función "deleteTecnicos"
router.delete('/api/v1/tecnicos/:id', deleteTecnicos); 


// se exporta el enrutador
export default router