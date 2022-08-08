import { PessoaRoutes } from './pessoa.routing';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [PessoaListComponent, PessoaFormComponent],
  imports: [
    CommonModule,
    PessoaRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PessoaModule {}
