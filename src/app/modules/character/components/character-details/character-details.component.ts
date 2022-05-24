import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ICharacter} from "../../interfaces";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  characterDetails: ICharacter;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.activatedRoute.data.subscribe(({characterData}) => this.characterDetails = characterData);
  }

}
