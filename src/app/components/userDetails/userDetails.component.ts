import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Navigation, Router} from "@angular/router";

import {UserService} from "../../services";
import {IUserDetails} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(value => {

      this.router.getCurrentNavigation()?.extras?.state?.['data'] as IUserDetails;

      this.userDetails = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IUserDetails;
    })
  }

    ngOnInit(): void {
      // this.activatedRoute.params.subscribe(value => {
      //   let {state: {data}} = history;
      //   this.userDetails = data as IUserDetails;
      // })


  }
}
