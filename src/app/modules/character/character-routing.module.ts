import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CharactersComponent} from "./components/characters/characters.component";
import {CharactersResolver} from "./services";
import {CharacterDetailsComponent} from "./components/character-details/character-details.component";

const routes: Routes = [
  {
    path: '', component: CharactersComponent,
    resolve: {charactersData: CharactersResolver},
    children: [
      {path: ':id', component: CharacterDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {
}
