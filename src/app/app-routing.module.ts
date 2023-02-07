import { HasRoleGuard } from './auth/has-role.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardDocumentoComponent } from './template/dashboard-documento/dashboard-documento.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { TopMenuComponent } from './template/top-menu/top-menu.component';

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
        canActivate: [AuthGuard],
        // data: {
        //   roles: ['ADMIN'],
        // },
      },
      {
        path: 'documentos',
        component: DashboardDocumentoComponent,
        canActivate: [AuthGuard],
        // data: {
        //   roles: ['USUARIO'],
        // },
      },
      {
        path: 'requerimentos',
        loadChildren: () =>
          import('./requerimento/requerimento.module').then(
            (m) => m.RequerimentoModule
          ),
        canActivate: [AuthGuard],
        // data: {
        //   roles: [Role.Admin],
        // },
      },
      {
        path: 'oficios',
        loadChildren: () =>
          import('./oficio/oficio.module').then((m) => m.OficioModule),
        canActivate: [AuthGuard],
        // data: {
        //   roles: [Role.User],
        // },
      },
      {
        path: 'vereadores',
        loadChildren: () =>
          import('./vereadores/vereadores.module').then(
            (m) => m.VereadoresModule
          ),
        canActivate: [AuthGuard, HasRoleGuard],
        data: {
          roles: 'ADMIN',
        },
      },
      {
        path: 'tipo-pessoa',
        loadChildren: () =>
          import('./tipo-pessoa/tipo-pessoa.module').then(
            (m) => m.TipoPessoaModule
          ),
        canActivate: [AuthGuard],
        // data: {
        //   roles: ['USUARIO'],
        // },
      },
      {
        path: 'servidores',
        loadChildren: () =>
          import('./servidores/servidores.module').then(
            (m) => m.ServidoresModule
          ),
        canActivate: [AuthGuard],
        // data: {
        //   roles: ['USUARIO'],
        // },
      },
      {
        path: 'assessores',
        loadChildren: () =>
          import('./assessores/assessores.module').then(
            (m) => m.AssessoresModule
          ),
        canActivate: [AuthGuard],
        // data: {
        //   roles: ['USUARIO'],
        // },
      },
      {
        path: 'cargos',
        loadChildren: () =>
          import('./cargos/cargos.module').then((m) => m.CargosModule),
        canActivate: [AuthGuard],
        // data: {
        //   roles: ['USUARIO'],
        // },
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'configuracoes',
        loadChildren: () =>
          import('./configuracao/configuracao.module').then(
            (m) => m.ConfiguracaoModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'pronome-tratamento',
        loadChildren: () =>
          import('./pronome-tratamento/pronome-tratamento.module').then(
            (m) => m.PronomeTratamentoModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
