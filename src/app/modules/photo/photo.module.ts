import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PhotoRoutingModule } from './photo-routing.module';
import {PhotoResolver, PhotoService, PhotosGuard, PhotosResolver} from "./services";
import { PhotoComponent } from './components/photo/photo.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';


@NgModule({
  declarations: [
    PhotoComponent,
    PhotosComponent,
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    HttpClientModule
  ],
  providers: [PhotoService, PhotosResolver, PhotoResolver, PhotosGuard]
})
export class PhotoModule { }
