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

// Components
import { ButtonComponent } from '../doc-viewer/components/button/button.component';
import { TableComponent } from '../doc-viewer/components/table/table.component';
import { CheckboxComponent } from '../doc-viewer/components/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  declarations: [
    ButtonComponent,
    TableComponent,
    CheckboxComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,

    ButtonComponent,
    TableComponent,
    CheckboxComponent
  ],
})
export class SharedModule {}

