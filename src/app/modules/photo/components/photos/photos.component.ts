import {Component, OnInit} from '@angular/core';

import {PhotoService} from "../../services";
import {IPhoto} from "../../interfaces";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: IPhoto[];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.getAll().subscribe(value => this.photos = value);
  }

}
