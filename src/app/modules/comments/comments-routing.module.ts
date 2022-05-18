import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "../../app-components/comments/comments.component";
import {CommentDetailsComponent} from "../../app-components/comment-details/comment-details.component";

const routes: Routes = [
  {path: '', component: CommentsComponent, children:[
      {path: ':id', component: CommentDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
