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
  MatCheckboxModule
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
  MatCheckboxModule
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
