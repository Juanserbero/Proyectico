import { Request, Response } from "express";
import { Router } from "express";
import {  AdminServices } from "./admin.service";

export class AdminController {
    AdminServices: any;
    
    // constructor(private readonly AdminServices: AdminServices = new AdminServices()) {
    
        //obteniendo todos los usuarios
    async getAdmin(req: Request, res: Response){
            try {
                const data = await this.AdminServices.findAllAdmin();
                res.status(200).json(data);
            } catch (e) {
                console.error(e);
            }
        }

    //obteniendo el usuario mediante un ID
    async getUserById(req: Request, res: Response){
            const { id } = req.params;
            try {
                const data = await this.AdminServices.findUserById(id);
                res.status(200).json(data);
            } catch (e) {
                console.error(e);
            }
        }

    //crear nuevo usuario
async createAdmin(req: Request, res: Response){
            try {
                const data = await this.AdminServices.createAdmin(req.body);
                res.status(200).json(data);
            } catch (e) {
                console.error(e);
            }
        }

//modificar usuario
async updateAdmin(req: Request, res: Response){
            const { id } = req.params;
            try {
                const data = await this.AdminServices.updateUser(id, req.body);
                res.status(200).json(data);
            } catch (e) {
                console.error(e);
            }
        }

//eliminar usuario
async deleteUser(req: Request, res: Response){
            const { id } = req.params;
            try {
                const data = await this.AdminServices.deleteUser(id);
                res.status(200).json(data);
            } catch (e) {
                console.error(e);
            }
        }

    }
}

// export class BaseRouter<T>{
// public router: Router;
//     public controller: T;
//     constructor(TController: { new (): T}) {
//         this.router = Router();
//         this.controller = new TController();
//         this.routes();
//     }
//     routes(){}
// }

