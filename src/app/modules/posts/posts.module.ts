import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostsRoutingModule} from './posts-routing.module';
import {PostService} from "../../services";
import {PostsComponent} from "../../app-components/posts/posts.component";
import {PostComponent} from "../../app-components/post/post.component";
import {PostDetailsComponent} from "../../app-components/post-details/post-details.component";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostsModule {
}
