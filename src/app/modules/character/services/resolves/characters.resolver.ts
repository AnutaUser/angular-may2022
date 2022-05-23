import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {ICharacter} from "../../interfaces";
import {CharacterService} from "../character.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersResolver implements Resolve<ICharacter[]> {

  constructor(private characterService: CharacterService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacter[]> | Promise<ICharacter[]> | ICharacter[] {
    return this.characterService.getALl();
  }

}
