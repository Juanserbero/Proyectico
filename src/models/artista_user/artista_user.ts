import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity({ name: "Artista_User" })
export class Artista_UserEntity extends BaseEntity {
	// 	@Column()
	// 	usuario!: 'postgres';
	// //  ……… atributo
	// 0constructor(private id: number, private Nombre: string, private password: string){
	    // super();
	@PrimaryGeneratedColumn()
	id!: String;

	@Column({ name: "Nombre" })
	nombre_Artista_User!: string;

	@Column()
	password!: string;
}



