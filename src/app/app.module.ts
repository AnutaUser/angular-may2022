import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './app-components/home/home.component';
import {appRouterModule} from "./app-router.module";
import {HeaderComponent} from "./app-components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
