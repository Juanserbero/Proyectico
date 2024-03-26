import { Request, Response } from "express";
import { Router } from "express";

export class ArtistaController {
	getUser(req: Request, res: Response ){
		res.status(200).json({
			user: "Nombre de Usuario",
		});
	}
}

export class BaseRouter<T>{
    public router: Router;
    public controller: T;
    constructor(TController: { new (): T}) {
        this.router = Router();
        this.controller = new TController();
        this.routes();
    }
    routes(){}
}
