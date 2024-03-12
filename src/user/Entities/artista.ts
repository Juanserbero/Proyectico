import { Column, Entity } from "typeorm";

@Entity({ name: "artista" })
	export class UserEntity extends BaseEntity{
    	@Column()
    	usuario!: 'postgre';
	//  ……… atributo
    constructor(private id: number, private nombre: string, private fecha: string, private pais: string, private genero: string ){
        
        super();

    }
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
