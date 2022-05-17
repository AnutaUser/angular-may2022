import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {PostService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>{
      const state = this.router.getCurrentNavigation()?.extras?.state?.['postDetails'] as IPost;
      if (state) {
        this.postDetails = state;
      }else {
        this.postService.getById(id).subscribe(value => this.postDetails = value);
      }
    })
  }

}
