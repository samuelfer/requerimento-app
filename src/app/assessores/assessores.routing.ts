import { Routes, RouterModule } from '@angular/router';
import { AssessoresListComponent } from './assessores-list/assessores-list.component';
import { AssessoresFormComponent } from './assessores-form/assessores-form.component';

const routes: Routes = [
  {
    path: '',
    component: AssessoresListComponent,
  },
  {
    path: 'cadastro',
    component: AssessoresFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: AssessoresFormComponent,
    data: { title: 'Editar' },
  },
];

export const AssessoresRoutes = RouterModule.forChild(routes);
