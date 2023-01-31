import { PronomeFormComponent } from './pronome-form/pronome-form.component';
import { PronomeListComponent } from './pronome-list/pronome-list.component';
import { PronomeTratamentoRoutes } from './pronome-tratamento.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [PronomeListComponent, PronomeFormComponent],
  imports: [
    CommonModule,
    PronomeTratamentoRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
  ],
})
export class PronomeTratamentoModule {}
