import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { CancionDTO } from "../dto/cancion.dto";
import { CancionEntity } from "../entitie/cancion";

export class AdminServices extends BaseService<CancionEntity> {
    constructor(){
        super(CancionEntity);
    }
	// servicio para obtener todos los usuarios
    async findAllCancion():Promise<CancionEntity[]> {
        return (await this.execRepository).find();
    }
     
    // servicio para obtener un usuarios según id
    async findCancionById(id:String): Promise<CancionEntity | null>  {
        return (await this.execRepository).findOneBy( {id} );   
    }
    // servicio para crear un administrador
 async createCancion(body: CancionDTO): Promise<CancionEntity>{
        return (await this.execRepository).save(body);
    }
 
    // eliminar un usuario
    async deleteCancion(id: String): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }
    // actualizar un usuario
   async updateCancion(id: string, infoUpdate: CancionDTO): Promise<UpdateResult>{
    return (await this.execRepository).update(id, infoUpdate);
    }

}
