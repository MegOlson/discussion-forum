import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';

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
  },
  {
    path: 'add',
    component: AddComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
