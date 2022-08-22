import { Request, Response } from "express";
import { Product } from "../models/Product";
import { ProductService } from "../services/ProductService";
import { ValidateService } from "../services/ValidateService";
export class ProductRoutes{
    private productService:ProductService;
    private validateService:ValidateService;
    constructor(){
        this.productService = new ProductService();
        this.validateService = new ValidateService();
        this.getProducts = this.getProducts.bind(this);
    }
    public getProducts(req:Request,res:Response){
        const limit = Number(req.query.limit) || 1000;
        const minPrice = Number(req.query.minPrice) || 0;
        const maxPrice = Number(req.query.maxPrice) || 100000;
        this.validateService.validateAll(limit,minPrice,maxPrice)
        .then((validate)=> {
            if(validate){
                this.productService.getProducts()
                .then(products => {
                    let count = 0, total = 0,result:Product[] = [];
                    for(let i = 0; i < products.length; i++){
                        if(count >= limit)
                            break;
                        else{
                            if(products[i].price >= minPrice && products[i].price <= maxPrice){
                                total += products[i].price;
                                count++;
                                result.push(products[i]);
                            }
                        }
                    }
                    res.status(200).send({count,total,products:result});
                })
            }else
                res.send({message:'No valid'})
        })
        .catch(err=>{
            res.status(500).send(err);
        })
        
        
    }
}