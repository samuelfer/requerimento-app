import { PerfisFormComponent } from './perfis-form/perfis-form.component';
import { Routes, RouterModule } from '@angular/router';
import { PerfisListComponent } from './perfis-list/perfis-list.component';

const routes: Routes = [
  {
    path: '',
    component: PerfisListComponent,
  },
  {
    path: 'cadastro',
    component: PerfisFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: PerfisFormComponent,
    data: { title: 'Editar' },
  },
];

export const PerfisRoutes = RouterModule.forChild(routes);
