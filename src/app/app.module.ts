import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ListComponent } from "./list/list.component";
import { InputItemComponent } from "./input-item/input-item.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SucessAlertComponent } from "./sucess-alert/sucess-alert.component";
import { ItemsComponent } from "./items/items.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipe/recipe-details/recipe-details.component";
import { RecipeItemComponent } from "./recipe/recipe-list/recipe-item/recipe-item.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule, MatInputModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListComponent,
    InputItemComponent,
    WarningAlertComponent,
    SucessAlertComponent,
    ItemsComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
