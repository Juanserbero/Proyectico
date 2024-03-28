import { Request, Response } from "express";
import { Router } from "express";
import { ArtistaServices } from "./artista.service";

export class ArtistaController {
    private readonly AdminServices: ArtistaServices = new ArtistaServices;

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
    async getUserById(req: Request, res: Response) {
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
    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.deleteAdmin(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

}



