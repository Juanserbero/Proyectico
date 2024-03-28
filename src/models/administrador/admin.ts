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

	
	// Entidad donde se encuentra la llave foranea
// @OneToOne(()=> UserEntity, (user) => user.customer)
// @JoinColumn({name: user_id})
// user!: UserEntity;
 
// Entidad donde no esta la llave foranea
// @OneToOne(()=> CustomerEntity, (customer) => customer.user)
// customer!: CustomerEntity 
// Entidad donde se encuentra la llave foranea
// @ManyToOne(()=> UserEntity, (user) => user.customer)
// @JoinColumn({name: user_id})
// user!: UserEntity;
//  
// Entidad donde no esta la llave foranea
// @OneToMany(()=> CustomerEntity, (customer) => customer.user)
// customers!: CustomerEntity[]; 

}
