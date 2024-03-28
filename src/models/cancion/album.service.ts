import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { AlbumDTO } from "./album.dto";
import { AlbumEntity } from "./album";

export class AdminServices extends BaseService<AlbumEntity> {
    constructor(){
        super(AlbumEntity);
    }
	// servicio para obtener todos los usuarios
    async findAllAdmin():Promise<AlbumEntity[]> {
        return (await this.execRepository).find();
    }
     
    // servicio para obtener un usuarios según id
    async findAdminById(id:String): Promise<AlbumEntity | null>  {
        return (await this.execRepository).findOneBy( {id} );   
    }
    // servicio para crear un administrador
 async createAdmin(body: AlbumDTO): Promise<AlbumEntity>{
        return (await this.execRepository).save(body);
    }
 
    // eliminar un usuario
    async deleteAdmin(id: String): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }
    // actualizar un usuario
   async updateAdmin(id: string, infoUpdate: AlbumDTO): Promise<UpdateResult>{
    return (await this.execRepository).update(id, infoUpdate);
    }

}
