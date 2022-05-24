import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeResolver, EpisodesResolver} from "./services";
import {EpisodeDetailsComponent} from "./components/episode-details/episode-details.component";

const routes: Routes = [
  {
    path:'', component: EpisodesComponent,
    resolve:{data: EpisodesResolver},
    children:[
      {path: ':id', component: EpisodeDetailsComponent, resolve:{data: EpisodeResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
