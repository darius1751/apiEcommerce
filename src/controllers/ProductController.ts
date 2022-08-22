import { Router } from "express";
import { ProductRoutes } from "../routes/ProductRoutes";

export class ProductController{
    public readonly routes:Router;
    private productRoutes:ProductRoutes;
    constructor() {
        this.routes = Router();
        this.productRoutes = new ProductRoutes();
        this.createRoutes();
    }
    private createRoutes():void{
        this.routes.get('/products',this.productRoutes.getProducts);
    }
}