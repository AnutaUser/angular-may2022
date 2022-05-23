import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { CharacterRoutingModule } from './character-routing.module';
import {CharacterComponent} from "./components/character/character.component";
import {CharactersComponent} from "./components/characters/characters.component";
import {CharacterDetailsComponent} from "./components/character-details/character-details.component";
import {CharacterService, CharactersResolver} from "./services";


@NgModule({
  declarations: [
    CharacterComponent,
    CharactersComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService, CharactersResolver]
})
export class CharacterModule { }
