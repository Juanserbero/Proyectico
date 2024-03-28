import { BaseEntity,PrimaryGeneratedColumn,Column, Entity, IntegerType } from "typeorm";

@Entity({ name: "album" })
	export class UserEntity extends BaseEntity{
    // 	@Column()
    // 	usuario!: 'postgres';
	// //  ……… atributo
    // constructor(private id: number, private Nombre: string, private Duracion: String, private Fecha_Lanzamiento: Date, Cantidad_de_Canciones: number, Tipo: String, Descripcion: String , Artista_id: number, discografia_id: number ){
        
    //     super();

    // }
	@PrimaryGeneratedColumn()
	id!: String;

	@Column({ name: "Nombre" })
	nombre_album!: string;

	@Column()
	password!: string;

	@Column()
	duracion!: String;

	@Column()
	Fecha_Lanzamiento!: String;
	
	@Column()
	Cantidad_de_Canciones!: String;
	
	@Column()
	Tipo!: String;
	
	@Column()
	duracion!: String;
}