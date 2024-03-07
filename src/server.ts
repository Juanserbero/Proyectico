import express from 'express';
	import morgan from 'morgan';
	import cors from 'cors';

    class server {
        // variables de la clase
        public app: express.Application = express();
        private port: number = 8000;
    //constructor de la clase
	constructor(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.get('/api/hola', (req, res) => {
            res.status(200).json({
                message: "Hola mundo 1"
            })
        });
        this.listen();
    
    }

    //funcion de escucha del puerto
	public listen(){
		this.app.listen(this.port, () => {
		   console.log("Servidor ecuchando por el puerto =>" + this.port );
		});
	}
}

new server();