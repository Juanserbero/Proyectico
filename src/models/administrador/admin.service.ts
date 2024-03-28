import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { AdminTDO } from "./admin.dto";
import { AdminEntity } from "./admin";

export class AdminServices extends BaseService<AdminEntity> {
    constructor(){
        super(AdminEntity);
    }
	// servicio para obtener todos los usuarios
    async findAllAdmin():Promise<AdminEntity[]> {
        return (await this.execRepository).find();
    }
     
    // servicio para obtener un usuarios según id
    async findAdminById(id:String): Promise<AdminEntity | null>  {
        return (await this.execRepository).findOneBy( {id} );   
    }
    // servicio para crear un administrador
 async createAdmin(body: AdminTDO): Promise<AdminEntity>{
        return (await this.execRepository).save(body);
    }
 
    // eliminar un usuario
    async deleteAdmin(id: String): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }
    // actualizar un usuario
   async updateAdmin(id: string, infoUpdate: AdminTDO): Promise<UpdateResult>{
    return (await this.execRepository).update(id, infoUpdate);
    }

}
