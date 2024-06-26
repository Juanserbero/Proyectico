import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { ArtistaEntity } from "../../artista/entitie/artista";
import { AlbumEntity } from "../../album/entitie/album";

@Entity({ name: "artista_user" })
export class Artista_UserEntity extends BaseEntity {
	// 	@Column()
	// 	usuario!: 'postgres';
	// //  ……… atributo
	// 0constructor(private id: number, private Nombre: string, private password: string){
	// super();
	@PrimaryGeneratedColumn()
	id_artista_user!: String;

	@Column({ name: "Nombre" })
	nombre_Artista_User!: string;

	@Column()
	password!: string;

	@OneToOne(() => ArtistaEntity, (artista) => artista.artista_users)
	artistas!: ArtistaEntity 

}



