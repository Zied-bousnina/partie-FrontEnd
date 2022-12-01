import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {  FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilmService } from './services/film.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
