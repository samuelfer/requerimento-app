import { CargosRoutes } from './cargos.routing';
import { CargosFormComponent } from './cargos-form/cargos-form.component';
import { CargosListComponent } from './cargos-list/cargos-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [CargosListComponent, CargosFormComponent],
  imports: [
    CommonModule,
    CargosRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CargosModule {}
