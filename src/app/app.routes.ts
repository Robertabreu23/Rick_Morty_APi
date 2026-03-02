import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./characters/characters').then(m => m.Characters),
  },
  {
    path: 'character/:id',
    loadComponent: () => import('./details/details').then(m => m.Details),
  },
];
