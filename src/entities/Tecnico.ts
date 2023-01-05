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

    @Column({default: true})
    disponibilidad: boolean;

    @CreateDateColumn()
    createat: Date;
}