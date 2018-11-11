import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// design components
import { ColorsComponent } from './design/colors/colors.component';

// Components
import { HomeComponent } from './home/home.component';
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
        path: 'component',
        loadChildren: () => DocViewerModule
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
