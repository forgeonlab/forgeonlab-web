import { Routes } from '@angular/router';

export const routes: Routes = [
{ path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
{ path: 'servicos', loadComponent: () => import('./shared/servicos/servicos.component').then(m => m.ServicosComponent) },
{ path: 'portfolio', loadComponent: () => import('./shared/portfolio/portfolio.component').then(m => m.PortfolioComponent) },
// { path: 'contato', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
];
