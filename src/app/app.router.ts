import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

export const router: Routes = [
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
        component: ButtonsComponent
    },
    {
        path: 'tables',
        component: TablesComponent
    },
    {
        path: 'checkbox',
        component: CheckboxComponent
    },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
