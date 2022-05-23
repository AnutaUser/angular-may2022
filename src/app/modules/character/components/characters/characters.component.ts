import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICharacter} from "../../interfaces";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: ICharacter[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({charactersData}) => {
      const {results} = charactersData;
      this.characters = results;
    })

  }

}
