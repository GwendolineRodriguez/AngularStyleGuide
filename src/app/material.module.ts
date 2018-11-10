import { NgModule } from '@angular/core';
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

const modules = [
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
    modules
  ],
  exports: [
    modules
  ],
})
export class Material { }
