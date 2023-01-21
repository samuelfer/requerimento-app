import { ConfiguracaoComponent } from './configuracao.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastro',
    component: ConfiguracaoComponent,
    data: { title: 'Cadastrar configuração' },
  },
  {
    path: ':id',
    component: ConfiguracaoComponent,
    data: { title: 'Editar configuração' },
  },
];

export const ConfiguracaoRoutes = RouterModule.forChild(routes);
