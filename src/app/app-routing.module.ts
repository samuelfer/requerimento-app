import { TopMenuComponent } from './template/top-menu/top-menu.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: TopMenuComponent,
    canActivate: [AuthGuard],
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
          import('./vereador/vereador.module').then((m) => m.VereadorModule),
      },
      {
        path: 'tipo-pessoa',
        loadChildren: () =>
          import('./tipo-pessoa/tipo-pessoa.module').then(
            (m) => m.TipoPessoaModule
          ),
      },
      {
        path: 'servidores',
        loadChildren: () =>
          import('./servidores/servidores.module').then(
            (m) => m.ServidoresModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
