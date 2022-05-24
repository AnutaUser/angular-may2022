import { Component, OnInit } from '@angular/core';
import {ILocation} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: ILocation[];

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      const {results} = data;
      this.locations = results;
    })
  }

}
