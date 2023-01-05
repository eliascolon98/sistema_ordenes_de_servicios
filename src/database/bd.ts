import {DataSource} from 'typeorm'
import { Cliente } from '../entities/Cliente'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'eliascolon98',
    port: 5432,
    database: 'ordenes_servicios_bd',
    entities: [Cliente],
    synchronize: true,
    logging: true
})