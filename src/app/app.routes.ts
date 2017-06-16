import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';

export const router:Routes=[
  { path:'',redirectTo: 'categories', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'categories', component:CategoriesComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
