import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {ActivateUserDetailsGuard, DeactivateUsersGuard, UserResolver, UsersResolver} from "./services";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UsersResolver},
    canDeactivate: [DeactivateUsersGuard],
    children: [
      {path: ':id', component: UserDetailsComponent,
        resolve: {userData: UserResolver},
        canActivate:[ActivateUserDetailsGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
