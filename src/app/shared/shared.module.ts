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
import { ButtonsComponent } from '../doc-viewer/components/buttons/buttons.component';
import { TablesComponent } from '../doc-viewer/components/tables/tables.component';
import { CheckboxComponent } from '../doc-viewer/components/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  declarations: [
    ButtonsComponent,
    TablesComponent,
    CheckboxComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,

    ButtonsComponent,
    TablesComponent,
    CheckboxComponent
  ],
})
export class SharedModule {}

