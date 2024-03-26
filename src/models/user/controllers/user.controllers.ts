import { Request, Response } from "express";

export class UserController {
	getUser(req: Request, res: Response ){
		res.status(200).json({
			user: "Nombre de Usuario",
		});
	}
}
import { Router } from "express";
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
