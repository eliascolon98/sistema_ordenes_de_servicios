import {DataSource} from 'typeorm'
import { Cliente } from '../entities/Cliente'
import { Tecnico } from '../entities/Tecnico';
import { Servicio } from '../entities/Servicio';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'eliascolon98',
    port: 5432,
    database: 'ordenes_servicios_bd',
    entities: [Cliente, Tecnico, Servicio],
    synchronize: true,
    logging: true
})