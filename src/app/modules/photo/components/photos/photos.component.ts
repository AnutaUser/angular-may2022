import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPhoto} from "../../interfaces";


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: IPhoto[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({photosData}) => this.photos = photosData);
  }

}
