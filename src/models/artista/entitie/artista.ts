import { BaseEntity,PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { AlbumEntity } from "../../album/entitie/album";

@Entity({ name: "artista" })
	export class ArtistaEntity extends BaseEntity{
    // 	@Column()
    // 	usuario!: 'postgres';
	// //  ……… atributo
    // constructor(private id: number, private Nombre: string, private Fecha_Inicio: string, private Pais: string, private Genero: string, private Biografia: String ){
        
    //     super();

    // }

	@PrimaryGeneratedColumn()
	id!: String;

	@Column({ name: "Nombre" })
	nombre_album!: string;

	@Column()
	duracion!: String;

	@Column()
	Fecha_Inicio!: Date;

	@Column()
	Pais!: String;

	@Column()
	Genero!: String;
	@Column()
	Biografia!: String;


	@ManyToOne(() => AlbumEntity, (album) => album.artistas)
	album!: AlbumEntity;
	
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

