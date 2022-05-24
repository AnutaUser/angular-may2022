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
export class LocationResolver implements Resolve<ILocation> {

  constructor(private locationService: LocationService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILocation> | Promise<ILocation> | ILocation {
    const location = this.router.getCurrentNavigation()?.extras?.state?.['location'] as ILocation;

    if (location) {
      return location;
    }
    const {id} = route.params;
    return this.locationService.getById(id);
  }

}
