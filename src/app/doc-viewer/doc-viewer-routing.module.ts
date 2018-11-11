import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

const routes: Routes = [
  {
    path: '',
    component: DocViewerComponent,
    children: [
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full'
      },
      {
        path: 'button',
        component: ButtonComponent
      },
      {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'checkbox',
        component: CheckboxComponent
    },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocViewerRoutingModule { }
