import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

// se crea una aplicación de express
const app = express(); 
app.use(morgan('dev')); // se configura morgan en modo "dev"
app.use(cors()); // se habilita cors
app.use(express.json()) // se habilita el middleware de express para manejar JSON en las solicitudes entrantes

// Routes
import  clienteRoutes  from './routes/cliente.routes'; // se importan las rutas para la entidad "Cliente"
import  tecnicoRoutes  from './routes/tecnico.routes'; // se importan las rutas para la entidad "Tecnico"
import  servicioRoutes  from './routes/servicio.routes'; // se importan las rutas para la entidad "Servicio"

app.use(clienteRoutes); // se usan las rutas para la entidad "Cliente"
app.use(tecnicoRoutes); // se usan las rutas para la entidad "Tecnico"
app.use(servicioRoutes); // se usan las rutas para la entidad "Servicio"

// Ruta para ver la documentación de los endpoints con Swagger
const swaggerDocument: any = require('../swagger.json');
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app; // se exporta la aplicación