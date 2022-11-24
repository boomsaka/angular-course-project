import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Banana', 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingrendient: Ingredient){
    this.ingredients.push(ingrendient);
  }
}