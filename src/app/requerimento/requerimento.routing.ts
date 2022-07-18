import { RequerimentoFormComponent } from './requerimento-form/requerimento-form.component';
import { RequerimentoListComponent } from './requerimento-list/requerimento-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RequerimentoListComponent },
  {
    path: 'cadastro',
    component: RequerimentoFormComponent,
    data: { title: 'Preencher requerimento' },
  },
];

export const RequerimentoRoutes = RouterModule.forChild(routes);
