import {Component, OnInit} from '@angular/core';
import {LocationService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {ILocation} from "../../interfaces";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  locationDetails: ILocation;
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.locationDetails = data)
    console.log(this.locationDetails.residents.map(res =>{
      console.log(res)
    }))
  }

}
