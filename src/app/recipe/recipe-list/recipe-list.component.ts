import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipies: Recipe[] = [
    new Recipe(
      "recipe test",
      "this is test description",
      "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-580x740.jpg"
    ),
    new Recipe(
      "recipe test",
      "this is test description",
      "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-580x740.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
