import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {IPhoto} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(urls.photos);
  }

  getById(id: string): Observable<IPhoto> {
    return this.httpClient.get<IPhoto>(`${urls.photos}/${id}`);
  }
}
