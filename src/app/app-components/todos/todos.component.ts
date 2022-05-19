import {Component, OnInit} from '@angular/core';

import {ITodos} from "../../interfaces";
import {TodosService} from "../../services";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodos[];

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todosService.getAll().subscribe(value => this.todos = value);
  }

}
