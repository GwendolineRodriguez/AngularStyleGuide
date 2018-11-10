import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentService } from './service/components.service';

// Components
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TablesComponent } from './components/tables/tables.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { HomeComponent } from './home/home.component';
import { ColorsComponent } from './design/colors/colors.component';
import { CodeCardComponent } from './code-card/code-card.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TablesComponent,
    CheckboxComponent,
    HomeComponent,
    ColorsComponent,
    CodeCardComponent,
    DocViewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Material,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    ComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
