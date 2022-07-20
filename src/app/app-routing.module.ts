import { DashboardComponent } from './template/dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
