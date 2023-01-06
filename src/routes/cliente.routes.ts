import {Router} from 'express';
import { postClientes, getClientes, getCliente, putClientes, deleteClientes } from '../controllers/cliente.controllers';
import { validarCliente } from '../validators/cliente.validators';

const router = Router();

// se establece una ruta POST para la dirección "/api/v1/clientes" que ejecuta la función "postClientes"
router.post('/api/v1/clientes', validarCliente, postClientes);
// se establece una ruta GET para la dirección "/api/v1/clientes" que ejecuta la función "getClientes"
router.get('/api/v1/clientes', getClientes);
// se establece una ruta GET para la dirección "/api/v1/clientes/:id" que ejecuta la función "getCliente"
router.get('/api/v1/clientes/:id', getCliente);
// se establece una ruta PUT para la dirección "/api/v1/clientes/:id" que ejecuta la función "putClientes"
router.put('/api/v1/clientes/:id', validarCliente, putClientes);
// se establece una ruta DELETE para la dirección "/api/v1/clientes/:id" que ejecuta la función "deleteClientes"
router.delete('/api/v1/clientes/:id', deleteClientes);

// se exporta el enrutador
export default router