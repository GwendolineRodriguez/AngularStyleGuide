import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';

import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { DocViewerRoutingModule } from './doc-viewer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DocViewerRoutingModule,
    HttpClientModule,
    SharedModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  declarations: [
    DocViewerComponent,
  ],
  exports: [

  ]
})
export class DocViewerModule { }
