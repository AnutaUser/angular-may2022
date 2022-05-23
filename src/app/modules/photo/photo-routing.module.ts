import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PhotosComponent} from "./components/photos/photos.component";
import {PhotoDetailsComponent} from "./components/photo-details/photo-details.component";
import {PhotoResolver, PhotosGuard, PhotosResolver} from "./services";

const routes: Routes = [
  {
    path: '', component: PhotosComponent,
    resolve: {photosData: PhotosResolver},
    canActivate: [PhotosGuard],
    canDeactivate: [PhotosGuard],
    children: [
      {
        path: ':id', component: PhotoDetailsComponent,
        resolve: {photoData: PhotoResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule {
}
