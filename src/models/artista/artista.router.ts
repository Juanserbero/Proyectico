import { ArtistaController } from "./controllers/artista.controllers";
import { BaseRouter } from "../../shared/router/router";

export class ArtistaRouter extends BaseRouter<ArtistaController>{
    constructor() {
        super(ArtistaController);
    }
    routes(): void {
        // todos los usuarios
        this.router.get('/artista', (req, res) => this.controller.getArtista(req, res));

        // usuario por id
        this.router.get('/artista/:id', (req, res) => this.controller.getArtistaById(req, res));

        // adicionar usuario
        this.router.post('/artista/createArtista', (req, res) => this.controller.createArtista(req, res));


        //modificar usuario
        this.router.put('/artista/updateArtista/:id', (req, res) => this.controller.updateArtista(req, res));

        // eliminar usuario
        this.router.delete('/artista/Artista:id', (req, res) => this.controller.deleteArtista(req, res));
    }
}


