import { BaseEntity, PrimaryGeneratedColumn,Column, Entity } from "typeorm";

@Entity({ name: "artista" })
	export class CancionEntity extends BaseEntity{
    // 	@Column()
    // 	usuario!: 'postgres';
	// //  ……… atributo
    // constructor(private id: number, private Nombre: string, private Duracion: string, private Genero: string, private Tono: string, private Letra: string, private Descripcion: string, private Album_id: number   ){
        
    //     super();

    // }
	@PrimaryGeneratedColumn()
	id!: String;

	@Column({ name: "Nombre" })
	nombre_album!: string;

	@Column()
	duracion!: String;

	@Column()
	genero!: String;

	@Column()
	tono!: String;

	@Column()
	letra!: String;

	@Column()
	descripcion!: String;

	@Column()
	durAlbum_idacion!: String;


}