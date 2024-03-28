import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { DiscograficaDTO } from "./discografica.dto";
import { DiscograficaEntity} from "./discografica";

export class DiscograficaServices extends BaseService<DiscograficaEntity> {
    constructor(){
        super(DiscograficaEntity);
    }
	// servicio para obtener todos los usuarios
    async findAllDiscografica():Promise<DiscograficaEntity[]> {
        return (await this.execRepository).find();
    }
     
    // servicio para obtener un usuarios según id
    async findDiscograficaById(id:String): Promise<DiscograficaEntity | null>  {
        return (await this.execRepository).findOneBy( {id} );   
    }
    // servicio para crear un administrador
 async createDiscografica(body: DiscograficaDTO): Promise<DiscograficaEntity>{
        return (await this.execRepository).save(body);
    }
 
    // eliminar un usuario
    async deleteDiscografica(id: String): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }
    // actualizar un usuario
   async updateDiscografica(id: string, infoUpdate: DiscograficaDTO): Promise<UpdateResult>{
    return (await this.execRepository).update(id, infoUpdate);
    }

}
