import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import {  } from '@angular/core';

import {TestCompComponent} from './test-comp/test-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule(
{
  declarations: [
    AppComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}


)

export class AppModule { }
