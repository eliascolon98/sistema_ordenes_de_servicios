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
@Entity() // se marca la clase como una entidad de base de datos
export class Servicio extends BaseEntity{ // se exporta la clase "Servicio" que hereda de la clase "BaseEntity"
    @PrimaryGeneratedColumn() // se marca la propiedad "id" como la columna principal y se genera su valor automáticamente
    id: number; // se declara una propiedad "id" de tipo número

    @Column({unique: true}) // se marca la propiedad "token" como una columna de la tabla de base de datos con una restricción de unicidad
    token: string // se declara una propiedad "token" de tipo cadena

    @ManyToOne(() => Cliente, (clientes) => clientes.id) // se establece una relación muchos-a-uno con la entidad "Cliente", donde un servicio puede tener un solo cliente y un cliente puede tener muchos servicios
    cliente: Cliente // se declara una propiedad "cliente" de tipo "Cliente"

    @Column() // se marca la propiedad "descripcion" como una columna de la tabla de base de datos
    descripcion: string // se declara una propiedad "descripcion" de tipo cadena

    @ManyToOne(() => Tecnico, (tecnicos) => tecnicos.id) // se establece una relación muchos-a-uno con la entidad "Tecnico", donde un servicio puede tener un solo técnico y un técnico puede tener muchos servicios
    @JoinColumn() // se establece una columna de unión para la relación
    tecnico: Tecnico // se declara una propiedad "tecnico" de tipo "Tecnico"

    @Column() // se marca la propiedad "estado" como una columna de la tabla de base de datos
    estado: string // se declara una propiedad "estado" de tipo cadena

    @CreateDateColumn() // se marca la propiedad "createat" como una columna de tipo fecha y se genera su valor automáticamente con la fecha actual
    createat: Date; // se declara una propiedad "createat" de tipo fecha
}



