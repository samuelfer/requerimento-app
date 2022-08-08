import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PessoaListComponent },
  {
    path: 'cadastro',
    component: PessoaFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: PessoaFormComponent,
    data: { title: 'Editar' },
  },
];

export const PessoaRoutes = RouterModule.forChild(routes);
