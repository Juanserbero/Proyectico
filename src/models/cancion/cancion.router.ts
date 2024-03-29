
import { CancionController } from "./controller/cancion.controllers";
import { BaseRouter } from "../../shared/router/router";

export class cancion_router extends BaseRouter<CancionController>{
        constructor() {
                super(CancionController);
        }
        routes(): void {
                // todos los usuarios
                this.router.get('/cancion', (req, res) => this.controller.getCancion(req, res));

                //usuario por id
                this.router.get('/cancion/:id', (req, res) => this.controller.getCancionById(req, res));

                // adicionar usuario
                this.router.post('/cancion/createCancion', (req, res) => this.controller.createCancion(req, res));


                //modificar usuario
                this.router.put('/cancion/updateCancion/:id', (req, res) => this.controller.updateCancion(req, res));

                // eliminar usuario
                this.router.delete('/cancion/deleteCancion/:id', (req, res) => this.controller.deleteCancion(req, res));
        }
}


