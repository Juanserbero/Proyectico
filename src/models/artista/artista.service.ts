import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { ArtistaDTO } from "./artista.dto";
import {ArtistaEntity} from "./artista";

export class ArtistaServices extends BaseService<ArtistaEntity> {
    constructor(){
        super(ArtistaEntity);
    }
	// servicio para obtener todos los usuarios
    async findAllAdmin():Promise<ArtistaEntity[]> {
        return (await this.execRepository).find();
    }
     
    // servicio para obtener un usuarios según id
    async findAdminById(id:String): Promise<ArtistaEntity | null>  {
        return (await this.execRepository).findOneBy( {id} );   
    }
    // servicio para crear un administrador
 async createAdmin(body: ArtistaDTO): Promise<ArtistaEntity>{
        return (await this.execRepository).save(body);
    }
 
    // eliminar un usuario
    async deleteAdmin(id: String): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }
    // actualizar un usuario
   async updateAdmin(id: string, infoUpdate: ArtistaDTO): Promise<UpdateResult>{
    return (await this.execRepository).update(id, infoUpdate);
    }

}
