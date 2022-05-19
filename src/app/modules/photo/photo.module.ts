import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import {PhotoService} from "./services";
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent,
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    HttpClientModule
  ],
  providers: [PhotoService]
})
export class PhotoModule { }
