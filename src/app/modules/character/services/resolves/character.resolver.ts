import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {ICharacter} from "../../interfaces";
import {CharacterService} from "../character.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<ICharacter> {

  constructor(private characterService: CharacterService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacter> | Promise<ICharacter> | ICharacter {
    const character = this.router.getCurrentNavigation()?.extras?.state?.['character'] as ICharacter;
    if (character) {
      return character;
    }
    const {id} = route.params;
    return this.characterService.getById(id);
  }

}
