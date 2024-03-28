import { BaseEntity, Column, Entity, IntegerType } from "typeorm";

@Entity({ name: "album" })
	export class UserEntity extends BaseEntity{
    	@Column()
    	usuario!: 'postgres';
	//  ……… atributo
    constructor(private id: number, private Nombre: string, private Duracion: String, private Fecha_Lanzamiento: Date, Cantidad_de_Canciones: number, Tipo: String, Descripcion: String , Artista_id: number, discografia_id: number ){
        
        super();

    }
}