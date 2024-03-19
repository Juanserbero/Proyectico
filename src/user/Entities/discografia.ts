import { BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: "artista" })
	export class UserEntity extends BaseEntity{
    	@Column()
    	usuario!: 'postgres';
	//  ……… atributo
    constructor(private id: number, private Nombre: string,){
        super();

    }
}