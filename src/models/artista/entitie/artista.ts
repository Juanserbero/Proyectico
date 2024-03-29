import { BaseEntity,PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { AlbumEntity } from "../../album/entitie/album";
import { Artista_UserEntity } from "../../artista_user/entitie/artista_user";

@Entity({ name: "artista" })
	export class ArtistaEntity extends BaseEntity{
    // 	@Column()
    // 	usuario!: 'postgres';
	// //  ……… atributo
    // constructor(private id: number, private Nombre: string, private Fecha_Inicio: string, private Pais: string, private Genero: string, private Biografia: String ){
        
    //     super();

    // }

	@PrimaryGeneratedColumn()
	id_artista!: String;

	@Column()
	nombre_artista!: string;

	@Column()
	fecha_Inicio!: Date;

	@Column()
	pais!: String;

	@Column()
	genero!: String;

	@Column()
	biografia!: String;


	@ManyToOne(() => AlbumEntity, (album) => album.artistas)
	album!: AlbumEntity;

	@OneToOne(()=> Artista_UserEntity, (artista_user) => artista_user.artistas,{cascade:true})
	@JoinColumn({name: 'id_artista_user'})
	artista_users!: Artista_UserEntity;
	
}

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

