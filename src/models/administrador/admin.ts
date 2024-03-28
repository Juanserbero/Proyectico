import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity({ name: "admin" })
export class AdminEntity extends BaseEntity {

	// 	@Column()
	// 	usuario!: 'postgres';
	// //  ……… atributo
	// constructor(private id: number, private Nombre: string, private Password: string){

	//     super();
	
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ name: "Nombre" })
	nombre_Artista_User!: string;

	@Column()
	password!: string;
}
