import { Request, Response } from "express";
import { Router } from "express";
import { Artista_UserServices } from "./artista_user.service";

export class Artista_UserController {
    private readonly Artista_UserServices: Artista_UserServices = new Artista_UserServices;
    

    //obteniendo todos los usuarios
    async getArtista_User(req: Request, res: Response) {
        try {
            const data = await this.Artista_UserServices.findAllArtista_User();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    

    //obteniendo el usuario mediante un ID
    async getArtista_UserById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.Artista_UserServices.findArtista_UserById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //crear nuevo usuario
    async createArtista_User(req: Request, res: Response) {
        try {
            const data = await this.Artista_UserServices.createArtista_User(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //modificar usuario
    async updateArtista_User(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.Artista_UserServices.updateArtista_User(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //eliminar usuario
    async deleteArtista_User(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.Artista_UserServices.deleteArtista_User(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

}



