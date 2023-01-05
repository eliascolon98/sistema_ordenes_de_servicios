import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    BaseEntity
} from 'typeorm'

@Entity()
export class Cliente extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string

    @Column()
    direccion: string;

    @Column({unique: true})
    correo: string;

    @Column({unique: true})
    telefono: number;

    @CreateDateColumn()
    createat: Date;
}