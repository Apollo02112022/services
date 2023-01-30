export class Cocktail {
   
    name: string | undefined; 
    price: string | undefined;
    picture: string | undefined

    constructor(name?: string | undefined, price?: string | undefined, picture?: string | undefined) {
        this.name = name,
        this.price = price, 
        this.picture = picture
    }
}
