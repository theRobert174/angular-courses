import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change-detection',
        loadComponent: () => import('./dashboard/pages/changeDetection/changeDetection.component')
      },
      {
        path: 'control-flow',
        title: 'Control-flow',
        loadComponent: () => import('./dashboard/pages/controlFlow/controlFlow.component')
      },
      {
        path: 'defer-options',
        title: 'Defer-options',
        loadComponent: () => import('./dashboard/pages/deferOptions/deferOptions.component')
      },
      {
        path: 'defer-views',
        title: 'Defer-views',
        loadComponent: () => import('./dashboard/pages/deferViews/deferViews.component')
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component')
      },
      {
        path: 'users-list',
        title: 'Users-list',
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      {
        path: 'view-transition1',
        title: 'View-transition1',
        loadComponent: () => import('./dashboard/pages/viewTransition/viewTransition1.component')
      },
      {
        path: 'view-transition2',
        title: 'View-transition2',
        loadComponent: () => import('./dashboard/pages/viewTransition/viewTransition2.component')
      },
      {
        path:'',
        redirectTo: 'control-flow',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'/dashboard',
    pathMatch: 'full'
  }
];
