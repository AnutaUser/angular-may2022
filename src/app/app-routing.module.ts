import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'characters', loadChildren: () => import('./modules').then(value => value.CharacterModule)},
      {path: 'episodes', loadChildren: () => import('./modules').then(value => value.EpisodeModule)},
      {path: 'locations', loadChildren: () => import('./modules').then(value => value.LocationModule)}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
