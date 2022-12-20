import { TipoPessoaFormComponent } from './tipo-pessoa-form/tipo-pessoa-form.component';
import { TipoPessoaListComponent } from './tipo-pessoa-list/tipo-pessoa-list.component';
import { TipoPessoaRoutes } from './tipo-pessoa.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [TipoPessoaListComponent, TipoPessoaFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TipoPessoaRoutes,
    TableModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
  ],
})
export class TipoPessoaModule {}
