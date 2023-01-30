import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  cocktail1: Cocktail = new Cocktail("Eric's cocktail", "$10", "../assets/pictures/Eric_cocktail.png");
  cocktail2: Cocktail = new Cocktail("Razzak's cocktail", "$10", "../assets/pictures/Razzak_cocktail.png");
  cocktail3: Cocktail = new Cocktail("Mouss's cocktail", "$10", "../assets/pictures/Mouss_cocktail.png");
  cocktail4: Cocktail = new Cocktail("Nicolas's cocktail", "$10", "../assets/pictures/Nicolas_cocktail.png" );

  array = [this.cocktail1, this.cocktail2, this.cocktail3, this.cocktail4];

  getCocktails() {
    return this.array;
  }

}
