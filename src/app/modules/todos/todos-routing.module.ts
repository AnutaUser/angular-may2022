import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from "../../app-components/todos/todos.component";
import {TodoDetailsComponent} from "../../app-components/todo-details/todo-details.component";

const routes: Routes = [
  {
    path:'', component: TodosComponent, children:[
      {path:':id', component: TodoDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
