import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

import {urls} from "../../../constants";
import {IPhoto} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(urls.photos)
      .pipe(
        map(value => value),
    catchError((error) => throwError('error!!!!!'))
      );
  }

  getById(id: string): Observable<IPhoto> {
    return this.httpClient.get<IPhoto>(`${urls.photos}/${id}`);
  }
}
