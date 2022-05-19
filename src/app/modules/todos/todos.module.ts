import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { TodosRoutingModule } from './todos-routing.module';
import {TodosService} from "../../services";
import {TodosComponent} from "../../app-components/todos/todos.component";
import {TodoComponent} from "../../app-components/todo/todo.component";
import {TodoDetailsComponent} from "../../app-components/todo-details/todo-details.component";


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers: [TodosService]
})
export class TodosModule { }
