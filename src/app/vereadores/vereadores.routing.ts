import { VereadoresFormComponent } from './vereadores-form/vereadores-form.component';
import { VereadoresListComponent } from './vereadores-list/vereadores-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VereadoresListComponent,
  },
  {
    path: 'cadastro',
    component: VereadoresFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: VereadoresFormComponent,
    data: { title: 'Editar' },
  },
];

export const VereadoresRoutes = RouterModule.forChild(routes);
