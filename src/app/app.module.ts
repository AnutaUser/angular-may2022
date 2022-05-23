import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from "./components/header/header.component";
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
