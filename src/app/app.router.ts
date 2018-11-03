import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// design components
import { ColorsComponent } from './design/colors/colors.component';

// Components
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TablesComponent } from './components/tables/tables.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

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
    {
        path: 'colors',
        component: ColorsComponent
    },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
