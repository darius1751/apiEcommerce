import Express , { Application } from "express";
import cors from 'cors';
import morgan from "morgan";
import dotenv from 'dotenv';
import { ProductController } from "./ProductController";
export class ServerController{
    private app:Application;
    private productController:ProductController;
    constructor(){
        this.app = Express();
        this.useResources();
        this.productController = new ProductController();
        this.configRoutes();
        
    }
    private useResources():void{
        dotenv.config();
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(Express.json());
        this.app.set('port',process.env.PORT || 8080);
    }
    private configRoutes():void{
        this.app.use(this.productController.routes);
    }
    public start():void{
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server run in port: ${this.app.get('port')}`);
        })
    }
}