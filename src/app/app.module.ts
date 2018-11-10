import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DocViewerModule } from './doc-viewer/doc-viewer.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentService } from './service/components.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ColorsComponent } from './design/colors/colors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    DocViewerModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [
  ],
  providers: [
    ComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
