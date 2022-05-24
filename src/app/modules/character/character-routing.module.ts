import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CharactersComponent} from "./components/characters/characters.component";
import {CharacterResolver, CharactersGuard, CharactersResolver} from "./services";
import {CharacterDetailsComponent} from "./components/character-details/character-details.component";

const routes: Routes = [
  {
    path: '', component: CharactersComponent,
    resolve: {charactersData: CharactersResolver},
    canDeactivate:[CharactersGuard]
    // children: [
    //   {path: ':id', component: CharacterDetailsComponent, resolve:{characterData: CharacterResolver}}
    // ]
  },
  {path: ':id', component: CharacterDetailsComponent, resolve:{characterData: CharacterResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {
}
