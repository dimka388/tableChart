import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TablechartComponent } from './shared/tablechart/tablechart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablechartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
