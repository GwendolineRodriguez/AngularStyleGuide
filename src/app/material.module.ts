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
  MatTreeModule
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
  MatTreeModule
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
