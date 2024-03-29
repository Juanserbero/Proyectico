import { Request, Response } from "express";
import { Router } from "express";
import { AdminServices } from "../service/admin.service";

export class AdminController {
    private readonly AdminServices: AdminServices = new AdminServices;

    //obteniendo todos los usuarios
    async getAdmin(req: Request, res: Response) {
        try {
            const data = await this.AdminServices.findAllAdmin();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //obteniendo el usuario mediante un ID
    async getAdminById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.findAdminById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //crear nuevo usuario
    async createAdmin(req: Request, res: Response) {
        try {
            const data = await this.AdminServices.createAdmin(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //modificar usuario
    async updateAdmin(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.updateAdmin(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //eliminar usuario
    async deleteAdmin(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.deleteAdmin(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

}



