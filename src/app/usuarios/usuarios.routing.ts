import { Routes, RouterModule } from '@angular/router';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosListComponent,
  },
  {
    path: 'cadastro',
    component: UsuariosFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: UsuariosFormComponent,
    data: { title: 'Editar' },
  },
];

export const UsuariosRoutes = RouterModule.forChild(routes);
