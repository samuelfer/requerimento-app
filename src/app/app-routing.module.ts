import { DashboardDocumentoComponent } from './template/dashboard-documento/dashboard-documento.component';
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
        path: 'documentos',
        component: DashboardDocumentoComponent,
      },
      {
        path: 'requerimentos',
        loadChildren: () =>
          import('./requerimento/requerimento.module').then(
            (m) => m.RequerimentoModule
          ),
      },
      {
        path: 'oficios',
        loadChildren: () =>
          import('./oficio/oficio.module').then((m) => m.OficioModule),
      },
      {
        path: 'vereadores',
        loadChildren: () =>
          import('./vereadores/vereadores.module').then(
            (m) => m.VereadoresModule
          ),
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
      {
        path: 'assessores',
        loadChildren: () =>
          import('./assessores/assessores.module').then(
            (m) => m.AssessoresModule
          ),
      },
      {
        path: 'cargos',
        loadChildren: () =>
          import('./cargos/cargos.module').then((m) => m.CargosModule),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
      },
      {
        path: 'configuracoes',
        loadChildren: () =>
          import('./configuracao/configuracao.module').then(
            (m) => m.ConfiguracaoModule
          ),
      },
      {
        path: 'pronome-tratamento',
        loadChildren: () =>
          import('./pronome-tratamento/pronome-tratamento.module').then(
            (m) => m.PronomeTratamentoModule
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
