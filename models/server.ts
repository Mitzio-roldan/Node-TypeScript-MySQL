import express from 'express'
import userRouter from '../routes/usuarios';
import cors from 'cors'

import db from '../db/connection';

class Server {

    private app: express.Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }
    


    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080'
        this.dbConnection()
        this.middlewares()
        this.routes()
    }


    async dbConnection (){
        try {
            await db.authenticate()
            console.log('base ok');
            
        } catch (error: Error) {
            throw new Error(error);
            
        }
    }


    routes(){
        this.app.use(this.apiPaths.usuarios, userRouter)
    }

    middlewares(){

        // CORS
        this.app.use(cors())

        this.app.use(express.json())

        this.app.use(express.static('public'))




    }



    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto ' + this.port);
            
        })
    }

}

export default Server