import { VereadorRoutes } from './vereador.routing';
import { VereadorFormComponent } from './vereador-form/vereador-form.component';
import { VereadorListComponent } from './vereador-list/vereador-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [VereadorListComponent, VereadorFormComponent],
  imports: [
    CommonModule,
    VereadorRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VereadorModule {}
