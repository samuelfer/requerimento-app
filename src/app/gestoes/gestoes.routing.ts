import { Routes, RouterModule } from '@angular/router';
import { GestoesListComponent } from './gestoes-list/gestoes-list.component';
import { GestoesFormComponent } from './gestoes-form/gestoes-form.component';

const routes: Routes = [
  {
    path: '',
    component: GestoesListComponent,
  },
  {
    path: 'cadastro',
    component: GestoesFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: GestoesFormComponent,
    data: { title: 'Editar' },
  },
];

export const GestoesRoutes = RouterModule.forChild(routes);
