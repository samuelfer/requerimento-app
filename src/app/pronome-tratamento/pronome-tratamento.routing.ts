import { RouterModule, Routes } from '@angular/router';

import { PronomeFormComponent } from './pronome-form/pronome-form.component';
import { PronomeListComponent } from './pronome-list/pronome-list.component';

const routes: Routes = [
  {
    path: '',
    component: PronomeListComponent,
  },
  {
    path: 'cadastro',
    component: PronomeFormComponent,
    data: { title: 'Cadastrar' },
  },
  {
    path: ':id',
    component: PronomeFormComponent,
    data: { title: 'Editar' },
  },
];

export const PronomeTratamentoRoutes = RouterModule.forChild(routes);
