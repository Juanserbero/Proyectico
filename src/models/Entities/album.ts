import { BaseEntity, Column, Entity, IntegerType } from "typeorm";

@Entity({ name: "album" })
	export class UserEntity extends BaseEntity{
    	@Column()
    	usuario!: 'postgres';
	//  ……… atributo
    constructor(private id: number, private Nombre: string, private Duracion: String, private Fecha: String, Cantidad_de_Canciones: number, Tipo: String, Descripcion: String , Artista_id: String ){
        
        super();

    }
}