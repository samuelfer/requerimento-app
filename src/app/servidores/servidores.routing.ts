import { ServidoresFormComponent } from './servidores-form/servidores-form.component';
import { ServidoresListComponent } from './servidores-list/servidores-list.component';
import { Routes, RouterModule } from '@angular/router';
import { TipoServidorListComponent } from './tipo-servidores/tipo-servidores-list/tipo-servidores-list.component';
import { TipoServidorFormComponent } from './tipo-servidores/tipo-servidores-form/tipo-servidores-form.component';

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
    path: 'tipo-servidor',
    component: TipoServidorListComponent,
    data: { title: 'Listar' },
  },
  {
    path: ':id',
    component: ServidoresFormComponent,
    data: { title: 'Editar' },
  },
  
  {
    path: 'tipo-servidor/cadastrar',
    component: TipoServidorFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: 'tipo-servidor/editar/:id',
    component: TipoServidorFormComponent,
    data: { title: 'Editar' },
  },
];

export const ServidoresRoutes = RouterModule.forChild(routes);
