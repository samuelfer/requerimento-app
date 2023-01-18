import { OficioFormComponent } from './oficio-form/oficio-form.component';
import { OficioListComponent } from './oficio-list/oficio-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: OficioListComponent },
  {
    path: 'cadastro',
    component: OficioFormComponent,
    data: { title: 'Preencher ofício' },
  },
  {
    path: ':id',
    component: OficioFormComponent,
    data: { title: 'Editar ofício' },
  },
];

export const OficioRoutes = RouterModule.forChild(routes);
