
import { DiscograficaController } from "./discografica.controllers";
import { BaseRouter } from "../../shared/router/router";

export class discografica_router extends BaseRouter<DiscograficaController>{
        constructor() {
                super(DiscograficaController);
        }
        routes(): void {
                // todos los usuarios
                this.router.get('/', (req, res) => this.controller.getDiscografica(req, res));

                //usuario por id
                this.router.get('/discografica/:id', (req, res) => this.controller.getDiscograficaById(req, res));

                // adicionar usuario
                this.router.post('/discografica/createDiscografica', (req, res) => this.controller.createDiscografica(req, res));


                //modificar usuario
                this.router.put('/discografica/updateDiscografica/:id', (req, res) => this.controller.updateDiscografica(req, res));

                // eliminar usuario
                this.router.delete('/discografica/deleteDiscografica/:id', (req, res) => this.controller.deleteDiscografica(req, res));
        }
}


