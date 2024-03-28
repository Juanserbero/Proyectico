
import { Artista_UserController } from "./artista_user.controllers";
import { BaseRouter } from "../../shared/router/router";

export class UserRouter extends BaseRouter<Artista_UserController>{
        constructor() {
                super(Artista_UserController);
        }
        routes(): void {
                // todos los usuarios
                this.router.get('/artista_user', (req, res) => this.controller.getArtista_User(req, res));

                //usuario por id
                this.router.get('/artista_user/:id', (req, res) => this.controller.getArtista_UserById(req, res));

                // adicionar usuario
                this.router.post('/artista_user/createArtista_user', (req, res) => this.controller.createArtista_User(req, res));


                //modificar usuario
                this.router.put('/artista_user//updateArtista_user:id', (req, res) => this.controller.updateArtista_User(req, res));

                // eliminar usuario
                this.router.delete('/artista_user/deleteArtista_user/:id', (req, res) => this.controller.deleteArtista_User(req, res));
        }
}


