import {Component, OnInit} from '@angular/core';
import {ITodos} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {TodosService} from "../../services";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todoDetails: ITodos;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private todosService: TodosService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['todoDetails'];
      if (state) {
        this.todoDetails = state;
      } else {
        this.todosService.getById(id).subscribe(value => this.todoDetails = value);
      }
    })
  }

}
