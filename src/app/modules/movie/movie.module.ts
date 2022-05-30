import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule
  ]
})
export class MovieModule { }
