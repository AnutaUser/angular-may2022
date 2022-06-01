import {Component, OnInit} from '@angular/core';

import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";
import {MoviesResolver} from "../../services/resolvers/movies.resolver";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  page: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      const {results} = data;
      this.movies = results;
    })

  }

}
