import { AlbumController } from "./album.controllers";
import { BaseRouter } from "../../shared/router/router";

export class AlbumRouter extends BaseRouter<AlbumController>{
    constructor() {
        super(AlbumController);
    }
    routes(): void {
        // todos los usuarios
        this.router.get('/album', (req, res) => this.controller.getAlbum(req, res));

        // usuario por id
        this.router.get('/album/:id', (req, res) => this.controller.getAlbumById(req, res));

        // adicionar usuario
        this.router.post('/album/createAlbum', (req, res) => this.controller.createAlbum(req, res));


        //modificar usuario
        this.router.put('/album/updateAlbum/:id', (req, res) => this.controller.updateAlbum(req, res));

        // eliminar usuario
        this.router.delete('/album/Album:id', (req, res) => this.controller.deleteAlbum(req, res));
    }
}


