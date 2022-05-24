import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ILocation} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ILocation[]> {
    return this.httpClient.get<ILocation[]>(urls.location);
  }

  getById(id: string): Observable<ILocation> {
    return this.httpClient.get<ILocation>(`${urls.location}/${id}`);
  }
}
