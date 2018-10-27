import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TablesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
