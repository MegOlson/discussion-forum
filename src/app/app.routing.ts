import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AllComponent } from './all/all.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'all',
    component: AllComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
