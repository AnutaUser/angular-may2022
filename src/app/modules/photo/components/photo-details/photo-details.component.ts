import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPhoto} from "../../interfaces";

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photoDetails: IPhoto;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({photoData}) => this.photoDetails = photoData)
  }

}
