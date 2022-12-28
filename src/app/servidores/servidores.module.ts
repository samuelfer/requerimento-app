import { ServidoresRoutes } from './servidores.routing';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServidoresListComponent } from './servidores-list/servidores-list.component';
import { ServidoresFormComponent } from './servidores-form/servidores-form.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [ServidoresListComponent, ServidoresFormComponent],
  imports: [
    CommonModule,
    ServidoresRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServidoresModule {}
