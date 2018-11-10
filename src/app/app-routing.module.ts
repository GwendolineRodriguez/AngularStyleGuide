import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// design components
import { ColorsComponent } from './design/colors/colors.component';

// Components
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './doc-viewer/components/buttons/buttons.component';
import { TablesComponent } from './doc-viewer/components/tables/tables.component';
import { CheckboxComponent } from './doc-viewer/components/checkbox/checkbox.component';
import { DocViewerModule } from './doc-viewer/doc-viewer.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'buttons',
        loadChildren: () => DocViewerModule
    },
    {
        path: 'tables',
        component: TablesComponent
    },
    {
        path: 'checkbox',
        component: CheckboxComponent
    },
    {
        path: 'colors',
        component: ColorsComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
