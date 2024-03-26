import {  ArtistaController } from "./controllers/artista.controllers";
import { BaseRouter } from "C:/Users/miche/OneDrive/Documentos/Miche/Ing Informatic/3ro/Primer Semestre/Program Web/Proyectico/src/shared/router/router";


export class UserRouter extends BaseRouter<UserController>{
    constructor(){
        super(UserController);
    }
    routes(): void {
        this.router.get('/user', (req, res) => this.controller.getUser(req, res));
    }
}
