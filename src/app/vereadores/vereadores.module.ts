import { VereadoresRoutes } from './vereadores.routing';
import { VereadoresFormComponent } from './vereadores-form/vereadores-form.component';
import { VereadoresListComponent } from './vereadores-list/vereadores-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

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
