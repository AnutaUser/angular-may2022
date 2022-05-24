import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import {EpisodeResolver, EpisodeService, EpisodesResolver} from "./services";


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    HttpClientModule
  ],
  providers: [EpisodeService, EpisodesResolver, EpisodeResolver]
})
export class EpisodeModule { }
