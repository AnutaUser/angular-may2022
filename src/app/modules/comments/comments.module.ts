import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from "../../app-components/comments/comments.component";
import {CommentComponent} from "../../app-components/comment/comment.component";
import {CommentDetailsComponent} from "../../app-components/comment-details/comment-details.component";
import {CommentService} from "../../services";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [CommentService]
})
export class CommentsModule {
}
