import { VereadorFormComponent } from './vereador-form/vereador-form.component';
import { VereadorListComponent } from './vereador-list/vereador-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VereadorListComponent,
  },
  {
    path: 'cadastro',
    component: VereadorFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: VereadorFormComponent,
    data: { title: 'Editar' },
  },
];

export const VereadorRoutes = RouterModule.forChild(routes);
