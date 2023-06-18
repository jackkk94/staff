import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './modules/core/services/auth-guard.service';

export enum AppRoutes {
  NgRx = 'ngrx',
  NgXs = 'ngxs',
  Results = 'results',
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.page.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'company-news',
    loadChildren: () =>
      import('./pages/news/news.page.module').then((m) => m.NewsPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./pages/users/users.page.module').then((m) => m.UsersPageModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
