export class ValidateService{
    public validateLimit(limit:number):boolean{
        return limit >= 0 && limit <= 1000;
    }
    public validateMinPrice(minPrice:number):boolean{
        return minPrice >= 0 && minPrice <= 100000;
    }
    public validateMaxPrice(maxPrice:number):boolean{
        return maxPrice >= 0 && maxPrice <= 100000;
    }
    public validateRange(minPrice:number,maxPrice:number):boolean{
        return minPrice < maxPrice;
    }
    public async validateAll(limit:number,minPrice:number,maxPrice:number):Promise<boolean>{
        return this.validateLimit(limit) && this.validateMinPrice(minPrice) && this.validateMaxPrice(maxPrice) && this.validateRange(minPrice,maxPrice);
    }
}