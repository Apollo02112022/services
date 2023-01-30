import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service'; 

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {

constructor(public CocktailService: CocktailService) {
  this.CocktailService;
}

cocktails = this.CocktailService.getCocktails();

}
