import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LocationResolver, LocationsResolver} from "./services";
import {LocationsComponent} from "./components/locations/locations.component";
import {LocationDetailsComponent} from "./components/location-details/location-details.component";

const routes: Routes = [
  {
    path:'', component:LocationsComponent,
    resolve: {data: LocationsResolver},
    children: [
      {path:':id', component: LocationDetailsComponent, resolve: {data: LocationResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
