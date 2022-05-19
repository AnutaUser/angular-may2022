import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPhoto} from "../../interfaces";
import {PhotoService} from "../../services";

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photoDetails: IPhoto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['photoDetails'] as IPhoto;
      if (state) {
        this.photoDetails = state;
      } else {
        this.photoService.getById(id).subscribe(value => this.photoDetails = value);
      }
    })
  }

}
