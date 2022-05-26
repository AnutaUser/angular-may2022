import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IToken, IUser} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessTokenKey = 'access';

  constructor(private httpClient: HttpClient) {
  }

  registerUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user);
  }

  loginUser(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access);
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey);
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

}
