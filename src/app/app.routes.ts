import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'basic',
        title: 'Pipes Básicos',
        loadComponent: () => import('./pages/basic-pages/basic-pages')
    },
    {
        path: 'numbers',
        title: 'Pipes Numbers',
        loadComponent: () => import('./pages/numbers-page/numbers-page')
    },
    {
        path: 'custom',
        title: 'Pipes Customs',
        loadComponent: () => import('./pages/custom-page/custom-page')
    },
    {
        path: 'uncommon',
        title: 'Pipes no tan comunes',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page')
    },
    {
        path: '**',
        redirectTo: 'basic'
    },

];
