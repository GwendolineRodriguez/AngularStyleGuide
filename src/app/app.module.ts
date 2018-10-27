import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutes } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material.module';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TablesComponent,
    CheckboxComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Material,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
