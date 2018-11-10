import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocViewerComponent } from './doc-viewer-list/doc-viewer.component';
import { ButtonsComponent } from '../components/buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    component: DocViewerComponent,
    children: [
      {
        path: '',
        redirectTo: '/buttons',
        pathMatch: 'full'
      },
      {
        path: '/buttons',
        component: ButtonsComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocViewerRoutingModule { }
