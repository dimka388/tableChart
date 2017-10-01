import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarchartComponent } from './shared/barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
