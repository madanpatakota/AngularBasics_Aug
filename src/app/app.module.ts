import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import {  } from '@angular/core';

import {TestCompComponent} from './test-comp/test-comp.component';
import { FormsModule } from '@angular/forms';
import { FirstlevelComponent } from './firstlevel/firstlevel.component';
import { SecondLevelComponent } from './second-level/second-level.component';
import { ThirdLevelComponent } from './third-level/third-level.component';
import { FourthLevelComponent } from './fourth-level/fourth-level.component';

@NgModule(
{
  declarations: [
    AppComponent,
    TestCompComponent,
    FirstlevelComponent,
    SecondLevelComponent,
    ThirdLevelComponent,
    FourthLevelComponent
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
