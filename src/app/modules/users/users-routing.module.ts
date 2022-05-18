import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "../../app-components/users/users.component";
import {UserDetailsComponent} from "../../app-components/user-details/user-details.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: ':id', component:UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
