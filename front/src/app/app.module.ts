import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { wineComponent } from './wine/wine.component';
import { wineItemComponent } from './wine/wine-list/wine-item/wine-item.component';
import { wineDetailComponent } from './wine/wine-detail/wine-detail.component';
import { wineListComponent } from './wine/wine-list/wine-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { wineStartComponent } from './wine/wine-start/wine-start.component';
import { champagneComponent } from './champagne/champagne.component';
import { champagneDetailComponent } from './champagne/champagne-detail/champagne-detail.component';
import { champagneListComponent } from './champagne/champagne-list/champagne-list.component';
import { champagneItemComponent } from './champagne/champagne-list/champagne-item/champagne-item.component';
import { champagneStartComponent } from './champagne/champagne-start/champagne-start.component';
import { beersComponent } from './beers/beers.component';
import { beerItemComponent } from './beers/beer-list/beer-item/beer-item.component';
import { beerDetailComponent } from './beers/beer-detail/beer-detail.component';
import { beerListComponent } from './beers/beer-list/beer-list.component';
import { beerStartComponent } from './beers/beer-start/beer-start.component';
import { LoginComponent } from './login/login.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { vodkaComponent } from './vodka/vodka.component';
import { VodkaListComponent } from './vodka/vodka-list/vodka-list.component';
import { VodkaStartComponent } from './vodka/vodka-start/vodka-start.component';
import { vodkaDetailComponent } from './vodka/vodka-detail/vodka-detail.component';
import { VodkaItemComponent } from './vodka/vodka-list/vodka-item/vodka-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    wineComponent,
    AboutComponent,
    wineItemComponent,
    wineDetailComponent,
    wineListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    wineStartComponent,
    champagneComponent,
    champagneDetailComponent,
    champagneItemComponent,
    champagneListComponent,
    champagneStartComponent,
    beersComponent,
    beerItemComponent,
    beerDetailComponent,
    beerListComponent,
    beerStartComponent,
    LoginComponent,
    CommentListComponent,
    vodkaComponent,
    VodkaListComponent,
    VodkaStartComponent,
    vodkaDetailComponent,
    VodkaItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
