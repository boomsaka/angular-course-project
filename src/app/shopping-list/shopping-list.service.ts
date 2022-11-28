import {Ingredient} from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService {
    ingredientChange = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 3),
        new Ingredient('Banana', 5)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingrendient: Ingredient) {
        this.ingredients.push(ingrendient);
        this.ingredientChange.emit(this.ingredients.slice());
    }

    addIngredients(ingrendients: Ingredient[]) {
        this.ingredients.push(...ingrendients);
        this.ingredientChange.emit(this.ingredients.slice());
    }
}