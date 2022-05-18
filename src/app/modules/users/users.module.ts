import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import {UserService} from "../../services";
import {UsersComponent} from "../../app-components/users/users.component";
import {UserComponent} from "../../app-components/user/user.component";
import {UserDetailsComponent} from "../../app-components/user-details/user-details.component";

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]

})
export class UsersModule { }
