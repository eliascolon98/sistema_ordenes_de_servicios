import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    BaseEntity
} from 'typeorm'

@Entity() // se marca la clase como una entidad de base de datos
export class Cliente extends BaseEntity{ // se exporta la clase "Cliente" que hereda de la clase "BaseEntity"
    @PrimaryGeneratedColumn() // se marca la propiedad "id" como la columna principal y se genera su valor automáticamente
    id: number; // se declara una propiedad "id" de tipo número

    @Column() // se marca la propiedad "nombre" como una columna de la tabla de base de datos
    nombre: string // se declara una propiedad "nombre" de tipo cadena

    @Column() // se marca la propiedad "direccion" como una columna de la tabla de base de datos
    direccion: string; // se declara una propiedad "direccion" de tipo cadena

    @Column({unique: true}) // se marca la propiedad "correo" como una columna de la tabla de base de datos con una restricción de unicidad
    correo: string; // se declara una propiedad "correo" de tipo cadena

    @Column({unique: true}) // se marca la propiedad "telefono" como una columna de la tabla de base de datos con una restricción de unicidad
    telefono: number; // se declara una propiedad "telefono" de tipo número

    @CreateDateColumn() // se marca la propiedad "createat" como una columna de tipo fecha y se genera su valor automáticamente con la fecha actual
    createat: Date; // se declara una propiedad "createat" de tipo fecha
}