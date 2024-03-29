import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { artista_user_router } from './models/artista_user/artista_user.router';
import { ConfigServer } from './config/config';
import connectDB from "./config/ormconfig";
import { AdminRouter } from './models/administrador/admin.router';
import { AlbumRouter } from './models/album/album.router';
import { cancion_router } from './models/cancion/cancion.router';
import { discografica_router } from './models/discografica/discografica.router';
import { ArtistaRouter } from './models/artista/artista.router';

class server extends ConfigServer {


    // variables de la clase
    public app: express.Application = express();
    private port: number = 8000; //this.getNumberEnv("PORT");


    //constructor de la clase
    constructor() {

        super();

        connectDB;

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use('/api', this.routers());
        this.listen();
    }

    //funcion de escucha del puerto
    public listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor ecuchando por el puerto =>" + this.port);
        });
    }

    routers(): Array<express.Router> {
        return [new AdminRouter().router, 
            new ArtistaRouter().router,
            new AlbumRouter().router,
            new artista_user_router().router,
            new cancion_router().router,
            new discografica_router().router];
    }

}




new server();
