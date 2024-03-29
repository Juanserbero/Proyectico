import { Request, Response } from "express";
import { Router } from "express";
import { AdminServices } from "../service/cancion.service";

export class CancionController {
    private readonly AdminServices: AdminServices = new AdminServices;

    //obteniendo todos los usuarios
    async getCancion(req: Request, res: Response) {
        try {
            const data = await this.AdminServices.findAllCancion();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //obteniendo el usuario mediante un ID
    async getCancionById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.findCancionById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //crear nuevo usuario
    async createCancion(req: Request, res: Response) {
        try {
            const data = await this.AdminServices.createCancion(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //modificar usuario
    async updateCancion(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.updateCancion(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //eliminar usuario
    async deleteCancion(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.deleteCancion(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

}



