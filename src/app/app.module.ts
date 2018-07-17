import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child-2/child-2.component';
import { LangTransServiceService } from './lang-trans-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LangTransServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
