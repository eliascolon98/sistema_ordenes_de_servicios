import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    BaseEntity
} from 'typeorm'

@Entity()
export class Tecnico extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string

    @Column()
    disponibilidad: string;

    @CreateDateColumn()
    createat: Date;
}