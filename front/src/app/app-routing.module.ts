import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {wineComponent} from './wine/wine.component';
import {wineStartComponent} from './wine/wine-start/wine-start.component';
import {wineDetailComponent} from './wine/wine-detail/wine-detail.component';
import {champagneDetailComponent} from './champagne/champagne-detail/champagne-detail.component';
import {champagneStartComponent} from './champagne/champagne-start/champagne-start.component';
import {champagneComponent} from './champagne/champagne.component';
import {beerStartComponent} from './beers/beer-start/beer-start.component';
import {beerDetailComponent} from './beers/beer-detail/beer-detail.component';
import {beersComponent} from './beers/beers.component';
import { LoginComponent } from './login/login.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import {vodka} from './vodka/vodka.model';
import {vodkaComponent} from './vodka/vodka.component';
import {VodkaStartComponent} from './vodka/vodka-start/vodka-start.component';
import {vodkaDetailComponent} from './vodka/vodka-detail/vodka-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'wine', component: wineComponent, children: [
      {path: '', component: wineStartComponent},
      {path: ':id', component: wineDetailComponent}
    ]},
    {path: 'champagne', component: champagneComponent, children: [
      { path: '', component: champagneStartComponent},
      { path: ':id', component: champagneDetailComponent}
    ]},
    {path: 'beers', component: beersComponent, children: [
      {path: '', component: beerStartComponent},
      {path: ':id', component: beerDetailComponent}
    ]},
  {path: 'vodkas', component: vodkaComponent, children: [
    {path: '', component: VodkaStartComponent},
    {path: ':id', component: vodkaDetailComponent}
    ]},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'comment', component: CommentListComponent},
  {path: '**',  redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
