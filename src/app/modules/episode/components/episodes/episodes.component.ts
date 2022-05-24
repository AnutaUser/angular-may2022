import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes: IEpisode[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
        const {results} = data;
        this.episodes = results;
      }
    );

  }
}
