import { BaseEntity,PrimaryGeneratedColumn,Column, Entity, IntegerType ,OneToMany} from "typeorm";
import { DiscograficaEntity } from "../discografica/discografica";



@Entity({ name: "album" })
	export class AlbumEntity extends BaseEntity{
    // 	@Column()
    // 	usuario!: 'postgres';
	// //  ……… atributo
    // constructor(private id: number, private Nombre: string, private Duracion: String, private Fecha_Lanzamiento: Date, Cantidad_de_Canciones: number, Tipo: String, Descripcion: String , Artista_id: number, discografia_id: number ){
        
    //     super();

    // }
	@PrimaryGeneratedColumn()
	id!: String;

	@Column({ name: "Nombre" })
	nombre_album!: string;

	@Column()
	duracion!: String;

	@Column()
	Fecha_Lanzamiento!: Date;
	
	@Column()
	Cantidad_de_Canciones!: number;
	
	@Column()
	Tipo!: String;
	
	@Column()
	descripcion!: String;

	@Column()
	artista_id!: string;

	@Column()
	Discografica_id!: string;

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
@OneToMany(()=> DiscograficaEntity, (id) => id.id)
album!: AlbumEntity[]; 

}