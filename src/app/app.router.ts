import { Routes, RouterModule} from '@angular/router';

import {PagesComponent} from './pages/pages.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './login/register.component'
import {DashboardComponent} from './pages/dashboard/dashboard.component'
import {Graficas1Component} from './pages/graficas1/graficas1.component'
import {ProgressComponent} from './pages/progress/progress.component'

const appRoutes: Routes = [
          {
             path: '',
             component: PagesComponent,
             children: [
                 { path: 'dashboard', component: DashboardComponent},
                 { path: 'graficas', component: Graficas1Component},
                 { path: 'progress', component: ProgressComponent}
             ]
          },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes,{useHash: true});
