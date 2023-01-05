import {Router} from 'express';
import { postClientes, getClientes, getCliente, putClientes, deleteClientes } from '../controllers/cliente.controllers';
const router = Router();

router.post('/api/v1/clientes',postClientes)
router.get('/api/v1/clientes', getClientes)
router.get('/api/v1/clientes/:id', getCliente)
router.put('/api/v1/clientes/:id', putClientes)
router.delete('/api/v1/clientes/:id', deleteClientes)


export default router