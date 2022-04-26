import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WineComponent} from './Wine/Wine.component';
import {AboutComponent} from './about/about.component';
import {WineStartComponent} from './Wine/Wine-start/Wine-start.component';
import {WineDetailComponent} from './Wine/Wine-detail/Wine-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'Wine', component: WineComponent, children: [
      {path: '', component: WineStartComponent},
      {path: ':id', component: WineDetailComponent}
    ]},
  {path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
