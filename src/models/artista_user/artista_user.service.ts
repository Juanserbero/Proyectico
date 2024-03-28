import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { Artista_UserDTO } from "./artista_user.dto";
import { Artista_UserEntity } from "./entitie/artista_user";

export class Artista_UserServices extends BaseService<Artista_UserEntity> {
    constructor(){
        super(Artista_UserEntity);
    }
	// servicio para obtener todos los usuarios
    async findAllArtista_User():Promise<Artista_UserEntity[]> {
        return (await this.execRepository).find();
    }
     
    // servicio para obtener un usuarios según id
    async findArtista_UserById(id:String): Promise<Artista_UserEntity | null>  {
        return (await this.execRepository).findOneBy( {id} );   
    }
    // servicio para crear un usuario
 async createArtista_User(body: Artista_UserDTO): Promise<Artista_UserEntity>{
        return (await this.execRepository).save(body);
    }
 
    // eliminar un usuario
    async deleteArtista_User(id: String): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }
    // actualizar un usuario
   async updateArtista_User(id: string, infoUpdate: Artista_UserDTO): Promise<UpdateResult>{
    return (await this.execRepository).update(id, infoUpdate);
    }
}
