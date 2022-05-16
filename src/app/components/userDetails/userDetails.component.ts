import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserService} from "../../services";
import {IUserDetails} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=> {
      this.userService.getById(+id).subscribe(value => this.userDetails = value)
      }
    )
  };

}
