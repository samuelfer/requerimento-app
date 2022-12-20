import { TipoPessoaFormComponent } from './tipo-pessoa-form/tipo-pessoa-form.component';
import { TipoPessoaListComponent } from './tipo-pessoa-list/tipo-pessoa-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TipoPessoaListComponent },
  {
    path: 'cadastro',
    component: TipoPessoaFormComponent,
    data: { title: 'Cadastrar Tipo pessoa' },
  },
  {
    path: ':id',
    component: TipoPessoaFormComponent,
    data: { title: 'Editar Tipo pessoa' },
  },
];

export const TipoPessoaRoutes = RouterModule.forChild(routes);
