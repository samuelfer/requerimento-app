import { RequerimentoRoutes } from './requerimento.routing';
import { RequerimentoFormComponent } from './requerimento-form/requerimento-form.component';
import { RequerimentoListComponent } from './requerimento-list/requerimento-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [RequerimentoListComponent, RequerimentoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RequerimentoRoutes,
    TableModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    EditorModule,
    ButtonModule,
    InputTextModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RequerimentoModule {}
