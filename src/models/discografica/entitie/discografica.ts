import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { AlbumEntity } from "../../album/entitie/album";
@Entity({ name: "discografica" })
export class DiscograficaEntity extends BaseEntity {
	// 	@Column()
	// 	usuario!: 'postgres';
	// //  ……… atributo
	// constructor(private id: number, private Nombre: string, private Fecha_Creacion: Date ){
	//     super();

	// }
	@PrimaryGeneratedColumn()
	id!: String;

	@Column({ name: "Nombre" })
	nombre_album!: string;

	@Column()
	duracioFecha_Creacion!: Date;

	@ManyToOne(() => AlbumEntity, (album) => album.discograficas)
	album!: AlbumEntity;
}