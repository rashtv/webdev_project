import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { WineComponent } from './Wine/Wine.component';
import { WineItemComponent } from './wine/wine-list/wine-item/wine-item.component';
import { WineDetailComponent } from './Wine/Wine-detail/Wine-detail.component';
import { WineListComponent } from './Wine/Wine-list/Wine-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { WineStartComponent } from './Wine/Wine-start/Wine-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WineComponent,
    AboutComponent,
    WineItemComponent,
    WineDetailComponent,
    WineListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    WineStartComponent
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
