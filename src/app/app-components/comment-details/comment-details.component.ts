import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['commentDetails'];
      if (state) {
        this.commentDetails = state;
      } else {
        this.commentService.getById(id).subscribe(value => this.commentDetails = value);
      }
    })
  }

}
