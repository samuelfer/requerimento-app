import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

import { VereadoresFormComponent } from './vereadores-form/vereadores-form.component';
import { VereadoresListComponent } from './vereadores-list/vereadores-list.component';
import { VereadoresRoutes } from './vereadores.routing';

@NgModule({
  declarations: [VereadoresListComponent, VereadoresFormComponent],
  imports: [
    CommonModule,
    VereadoresRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VereadoresModule {}
