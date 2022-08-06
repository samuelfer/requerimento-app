import { SidebarComponent } from './template/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: SidebarComponent,
    canActivate: [],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'requerimentos',
        loadChildren: () =>
          import('./requerimento/requerimento.module').then(
            (m) => m.RequerimentoModule
          ),
      },
      {
        path: 'vereadores',
        loadChildren: () =>
          import('./pessoa/pessoa.module').then((m) => m.PessoaModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
