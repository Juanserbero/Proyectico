import { Request, Response } from "express";
import { Router } from "express";
import { ArtistaServices } from "../service/artista.service";

export class ArtistaController {
    private readonly ArtistaServices: ArtistaServices = new ArtistaServices;

    //obteniendo todos los usuarios
    async getArtista(req: Request, res: Response) {
        try {
            const data = await this.ArtistaServices.findAllArtista();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //obteniendo el usuario mediante un ID
    async getArtistaById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.ArtistaServices.findArtistaById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //crear nuevo usuario
    async createArtista(req: Request, res: Response) {
        try {
            const data = await this.ArtistaServices.createArtista(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //modificar usuario
    async updateArtista(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.ArtistaServices.updateArtista(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    //eliminar usuario
    async deleteArtista(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.ArtistaServices.deleteArtista(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

}



