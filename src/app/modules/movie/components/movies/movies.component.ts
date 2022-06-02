import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovie} from "../../interfaces";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  currentPage: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({data}) => {
      const {results} = data;
      this.movies = results;
    })
  }

  nextPage(num: number) {
    this.currentPage = num;
    console.log('current1' + this.currentPage)
    this.activatedRoute.queryParams.subscribe(({page}) => {
      page++;
      console.log('num'+ num);
      console.log('page' + page);

    })
  }

}
