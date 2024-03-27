import { Request, Response } from "express";
import { Router } from "express";

// export class ArtistaController {
// 	getUser(req: Request, res: Response ){
// 		res.status(200).json({
// 			user: "Nombre de Usuario",
// 		});
// 	}
// }

// export class BaseRouter<T>{
//     public router: Router;
//     public controller: T;
//     constructor(TController: { new (): T}) {
//         this.router = Router();
//         this.controller = new TController();
//         this.routes();
//     }
//     routes(){}
// }

constructor(private readonly userService: UserService = new UserService()){}
//obteniendo todos los usuarios
async getUsers(req: Request, res: Response){
    try {
      const data = await this.userService.findAllUsers();
        res.status(200).json(data);
    } catch (e) {
        console.error(e);            
    }
}
//obteniendo el usuario mediante un ID
async getUserById(req: Request, res: Response){
    const {id} = req.params;
    try {
  const data = await this.userService.findUserById(id);
        res.status(200).json(data);
    } catch (e) {
        console.error(e);            
    }
}

//crear nuevo usuario
async createUser(req: Request, res: Response){
    try {
const data = await this.userService.createUser (req.body);
        res.status(200).json(data);
    } catch (e) {
        console.error(e);            
    }
}

//modificar usuario
async updateUser(req: Request, res: Response){
    const {id} = req.params;
    try {
        const data = await this.userService.updateUser(id, req.body);
        res.status(200).json(data);
    } catch (e) {
        console.error(e);            
    }
}

//eliminar usuario
async deleteUser(req: Request, res: Response){
    const {id} = req.params;
    try {
        const data = await this.userService.deleteUser(id);
        res.status(200).json(data);
    } catch (e) {
        console.error(e);            
    }
}


