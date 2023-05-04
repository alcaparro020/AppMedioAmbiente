import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'onvoarding',
    loadComponent: () => import('./pages/onvoarding/onvoarding.page').then( m => m.HomePage)
  },
  {
    path: 'onboarding-sin-provincias',
    loadComponent: () => import('./pages/onboarding-sin-provincias/onboarding-sin-provincias.page').then( m => m.OnboardingSinProvinciasPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
];
