import { PessoaRoutes } from './pessoa.routing';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [PessoaListComponent, PessoaFormComponent],
  imports: [
    CommonModule,
    PessoaRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
  ],
})
export class PessoaModule {}
