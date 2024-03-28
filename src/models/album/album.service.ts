import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { AlbumDTO } from "./album.dto";
import { AlbumEntity } from "./entitie/album";

export class AlbumServices extends BaseService<AlbumEntity> {
    constructor(){
        super(AlbumEntity);
    }
	// servicio para obtener todos los usuarios
    async findAllAlbum():Promise<AlbumEntity[]> {
        return (await this.execRepository).find();
    }
     
    // servicio para obtener un usuarios según id
    async findalbumById(id:String): Promise<AlbumEntity | null>  {
        return (await this.execRepository).findOneBy( {id} );   
    }
    // servicio para crear un administrador
 async createAlbum(body: AlbumDTO): Promise<AlbumEntity>{
        return (await this.execRepository).save(body);
    }
 
    // eliminar un usuario
    async deleteAlbum(id: String): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }
    // actualizar un usuario
   async updateAlbum(id: string, infoUpdate: AlbumDTO): Promise<UpdateResult>{
    return (await this.execRepository).update(id, infoUpdate);
    }

}
