import { Request, Response } from "express";
import { Router } from "express";
import { DiscograficaServices } from "./discografica.service";

export class DiscograficaController {
    private readonly AdminServices: DiscograficaServices = new DiscograficaServices;

    //obteniendo todos los usuarios
    async getDiscografica(req: Request, res: Response) {
        try {
            const data = await this.AdminServices.findAllDiscografica();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //obteniendo el usuario mediante un ID
    async getDiscograficaById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.findDiscograficaById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //crear nuevo usuario
    async createDiscografica(req: Request, res: Response) {
        try {
            const data = await this.AdminServices.createDiscografica(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //modificar usuario
    async updateDiscografica(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.updateDiscografica(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //eliminar usuario
    async deleteDiscografica(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AdminServices.deleteDiscografica(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

}



