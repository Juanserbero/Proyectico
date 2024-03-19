import { BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: "admin" })
	export class UserEntity extends BaseEntity{
    	@Column()
    	usuario!: 'postgres';
	//  ……… atributo
    constructor(private id: number, private Nombre: string, private Password: string){
        
        super();

    }
}