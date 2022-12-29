import { CargosFormComponent } from './cargos-form/cargos-form.component';
import { CargosListComponent } from './cargos-list/cargos-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CargosListComponent,
  },
  {
    path: 'cadastro',
    component: CargosFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: CargosFormComponent,
    data: { title: 'Editar' },
  },
];

export const CargosRoutes = RouterModule.forChild(routes);
