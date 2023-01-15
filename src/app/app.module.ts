import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent, //the main application component
    HeroesComponent //the application component
  ],
  imports: [
    BrowserModule, //the that this and every application needs to run in a browser.BrowserModule
    FormsModule // ngModel - tag for HTML Forms
  ],
  providers: [],
  bootstrap: [AppComponent] //bootstrap — the root component that Angular creates and inserts into the host web page.index.html
})
export class AppModule { }
