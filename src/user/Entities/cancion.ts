import { BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: "artista" })
	export class UserEntity extends BaseEntity{
    	@Column()
    	usuario!: 'postgres';
	//  ……… atributo
    constructor(private id: number, private Nombre: string, private Duracion: string, private Genero: string, private Tono: string, private Letra: string, private Descripcion: string, private Album_id: string   ){
        
        super();

    }
}