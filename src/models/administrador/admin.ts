import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity({ name: "admin" })
export class AdminEntity extends BaseEntity {

	// 	@Column()
	// 	usuario!: 'postgres';
	// //  ……… atributo
	// constructor(private id: number, private Nombre: string, private Password: string){

	//     super();
	
	@PrimaryGeneratedColumn()
	id!: String;

	@Column({ name: "Nombre" })
	nombre_Admin!: string;

	@Column()
	password!: string;
}
