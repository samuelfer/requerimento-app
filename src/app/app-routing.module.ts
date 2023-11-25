import { HasRoleGuard } from './auth/has-role.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardDocumentoComponent } from './template/dashboard-documento/dashboard-documento.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { TopMenuComponent } from './template/top-menu/top-menu.component';
import { Role } from './shared/enum/role-enum';

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
        data: {
          roles: [Role.Admin, Role.User],
        },
      },
      {
        path: 'documentos',
        component: DashboardDocumentoComponent,
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin, Role.User],
        },
      },
      {
        path: 'requerimentos',
        loadChildren: () =>
          import('./requerimento/requerimento.module').then(
            (m) => m.RequerimentoModule
          ),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin, Role.User],
        },
      },
      {
        path: 'oficios',
        loadChildren: () =>
          import('./oficio/oficio.module').then((m) => m.OficioModule),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin, Role.User],
        },
      },
      {
        path: 'vereadores',
        loadChildren: () =>
          import('./vereadores/vereadores.module').then(
            (m) => m.VereadoresModule
          ),
        canActivate: [AuthGuard, HasRoleGuard],
        data: {
          roles: [Role.Admin, Role.User],
        },
      },
      {
        path: 'tipo-pessoa',
        loadChildren: () =>
          import('./tipo-pessoa/tipo-pessoa.module').then(
            (m) => m.TipoPessoaModule
          ),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin, Role.User],
        },
      },
      {
        path: 'servidores',
        loadChildren: () =>
          import('./servidores/servidores.module').then(
            (m) => m.ServidoresModule
          ),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin, Role.User],
        },
      },
      {
        path: 'assessores',
        loadChildren: () =>
          import('./assessores/assessores.module').then(
            (m) => m.AssessoresModule
          ),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin, Role.User],
        },
      },
      {
        path: 'cargos',
        loadChildren: () =>
          import('./cargos/cargos.module').then((m) => m.CargosModule),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin],
        },
      },
      {
        path: 'admin/usuarios',
        loadChildren: () =>
          import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin],
        },
      },
      {
        path: 'configuracoes',
        loadChildren: () =>
          import('./configuracao/configuracao.module').then(
            (m) => m.ConfiguracaoModule
          ),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin],
        },
      },
      {
        path: 'pronome-tratamento',
        loadChildren: () =>
          import('./pronome-tratamento/pronome-tratamento.module').then(
            (m) => m.PronomeTratamentoModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'admin/perfis',
        loadChildren: () =>
          import('./perfis/perfis.module').then((m) => m.PerfisModule),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin],
        },
      },
      {
        path: 'gestoes',
        loadChildren: () =>
          import('./gestoes/gestoes.module').then((m) => m.GestoesModule),
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
