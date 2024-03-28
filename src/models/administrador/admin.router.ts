import { AdminController } from "./admin.controllers";
import { BaseRouter } from "../../shared/router/router";

export class AdminRouter extends BaseRouter<AdminController>{
    constructor() {
        super(AdminController);
    }
    routes(): void {
        // todos los usuarios
        this.router.get('/admin', (req, res) => this.controller.getAdmin(req, res));

        // usuario por id
        this.router.get('/admin/:id', (req, res) => this.controller.getAdminById(req, res));

        // adicionar usuario
        this.router.post('/admin/createAdmin', (req, res) => this.controller.createAdmin(req, res));


        //modificar usuario
        this.router.put('/admin/updateAdmin/:id', (req, res) => this.controller.updateAdmin(req, res));

        // eliminar usuario
        this.router.delete('/admin/deleteAdmin:id', (req, res) => this.controller.deleteAdmin(req, res));
    }
}


