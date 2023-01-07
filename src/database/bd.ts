import {DataSource} from 'typeorm'
import { Cliente } from './entities/Cliente'
import { Tecnico } from './entities/Tecnico';
import { Servicio } from './entities/Servicio';


let type:any = process.env.BD_DRIVE;
let host:any = process.env.DB_HOST;
let username:any = process.env.BD_USER;
let password:any = process.env.BD_PASS;
let database:any = process.env.BD_NAME;
let port:any = process.env.PORT_PG;

export const AppDataSource = new DataSource({
    type: type,
    host: host,
    username: username,
    password: password,
    port: port || 5432,
    database: database,
    entities: [Cliente, Tecnico, Servicio],
    synchronize: true,
    logging: true
})
