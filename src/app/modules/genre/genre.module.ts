import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenresComponent } from './components/genres/genres.component';
import { GenreComponent } from './components/genre/genre.component';


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule,
    HttpClientModule
  ]
})
export class GenreModule { }
