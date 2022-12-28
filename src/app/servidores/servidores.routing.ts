import { ServidoresFormComponent } from './servidores-form/servidores-form.component';
import { ServidoresListComponent } from './servidores-list/servidores-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ServidoresListComponent,
  },
  {
    path: 'cadastro',
    component: ServidoresFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: ServidoresFormComponent,
    data: { title: 'Editar' },
  },
];

export const ServidoresRoutes = RouterModule.forChild(routes);
