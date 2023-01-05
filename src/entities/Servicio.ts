import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn
} from 'typeorm'

import { Tecnico } from './Tecnico';
import { Cliente } from './Cliente';
@Entity()
export class Servicio extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    token: string

    @ManyToOne(() => Cliente, (clientes) => clientes.id)
    cliente: Cliente

    @Column()
    descripcion: string

    @ManyToOne(() => Tecnico, (tecnicos) => tecnicos.id)
    @JoinColumn()
    tecnico: Tecnico

    @Column()
    estado: string

    @CreateDateColumn()
    createat: Date;
}