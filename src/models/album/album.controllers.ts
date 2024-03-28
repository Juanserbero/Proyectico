import { Request, Response } from "express";
import { Router } from "express";
import { AlbumServices } from "./album.service";

export class AlbumController {
    private readonly AlbumServices: AlbumServices = new AlbumServices;

    //obteniendo todos los usuarios
    async getAlbum(req: Request, res: Response) {
        try {
            const data = await this.AlbumServices.findAllAlbum();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //obteniendo el usuario mediante un ID
    async getAlbumById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AlbumServices.findalbumById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //crear nuevo usuario
    async createAlbum(req: Request, res: Response) {
        try {
            const data = await this.AlbumServices.createAlbum(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //modificar usuario
    async updateAlbum(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AlbumServices.updateAlbum(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //eliminar usuario
    async deleteAlbum(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.AlbumServices.deleteAlbum(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

}



