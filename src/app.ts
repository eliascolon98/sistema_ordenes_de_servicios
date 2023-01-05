import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import swaggerUi from 'swagger-ui-express';


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())


// Routes
import  clienteRoutes  from './routes/cliente.routes';
import  tecnicoRoutes  from './routes/tecnico.routes';
import  servicioRoutes  from './routes/servicio.routes';

app.use(clienteRoutes);
app.use(tecnicoRoutes);
app.use(servicioRoutes);


export default app;