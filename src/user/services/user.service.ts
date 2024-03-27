import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { UserTDO } from "../dto/user.dto";
import { UserEntity } from "../Entities/artista_user";

export class UserService extends BaseService<UserEntity> {
    constructor(){
        super(UserEntity);
    }
	// servicio para obtener todos los usuarios
    async findAllUsers():Promise<UserEntity[]> {
        return (await this.execRepository).find();
    }
     
    // servicio para obtener un usuarios según id
    async findUserById(id:number): Promise<UserEntity | null>  {
        return (await this.execRepository).findOneBy( {id} );   
    }
    // servicio para crear un usuario
 async createUser(body: UserTDO): Promise<UserEntity>{
        return (await this.execRepository).save(body);
    }
 
    // eliminar un usuario
    async deleteUser(id: number): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }
    // actualizar un usuario
   async updateUser(id: string, infoUpdate: UserTDO): Promise<UpdateResult>{
    return (await this.execRepository).update(id, infoUpdate);
    }
}
