import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material.module';
import { AppRoutes } from './app.router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TablesComponent } from './components/tables/tables.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
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
    AppRoutes,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
