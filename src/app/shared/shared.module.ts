import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatStepperModule,
  MatTabsModule,
  MatTableModule,
  MatCheckboxModule,
  MatTreeModule,
  MatTooltipModule
} from '@angular/material';

const MaterialModule = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatStepperModule,
  MatTabsModule,
  MatTableModule,
  MatCheckboxModule,
  MatTreeModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
})
export class SharedModule {}

