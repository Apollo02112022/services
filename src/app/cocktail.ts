export class Cocktail {
   
    name: string | undefined = "a"; 
    price: string | undefined = "b";
    picture: string | undefined = "c"

    constructor(name?: string | undefined, price?: string | undefined, picture?: string | undefined) {
        this.name = name,
        this.price = price, 
        this.picture = picture
    }
}
