import { BaseRouter } from "../shared/router/router";
import {  ArtistaController } from "./controllers/artista.controllers";


export class UserRouter extends BaseRouter<ArtistaController>{
    constructor(){
        super(ArtistaController);
    }
    routes(): void {
        this.router.get('/user', (req, res) => this.controller.getUser(req, res));
    }
}

import{UserController} from "./controllers/usuario.controller";
import { BaseRouter } from "../shared/router/router";

export class UserRouter extends BaseRouter<UserController>{
    constructor(){
        super(UserController);
    }
    routes(): void {
        // todos los usuarios
this.router.get('/users', (req, res) => this.controller.getUsers(req, res));
        /
/ usuario por id
this.router.get('/users/:id', (req, res) => this.controller.getUserById(req, res));

        // adicionar usuario
this.router.post('/users/createUser', (req, res) => this.controller.createUser(req, res));


        //modificar usuario
this.router.put('/users/updateUser/:id', (req, res) => this.controller.updateUser(req, res));

        // eliminar usuario
this.router.delete('/users/deleteUser/:id', (req, res) => this.controller.deleteUser(req, res));
    }
}


