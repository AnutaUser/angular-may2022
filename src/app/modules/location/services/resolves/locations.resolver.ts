import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {ILocation} from "../../interfaces";
import {LocationService} from "../location.service";

@Injectable({
  providedIn: 'root'
})
export class LocationsResolver implements Resolve<ILocation[]> {

  constructor(private locationService: LocationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILocation[]> | Promise<ILocation[]> | ILocation[] {
    return this.locationService.getAll();
  }

}
