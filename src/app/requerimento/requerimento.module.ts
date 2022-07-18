import { RequerimentoRoutes } from './requerimento.routing';
import { RequerimentoFormComponent } from './requerimento-form/requerimento-form.component';
import { RequerimentoListComponent } from './requerimento-list/requerimento-list.component';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [RequerimentoListComponent, RequerimentoFormComponent],
  imports: [CommonModule, RequerimentoRoutes, TableModule],
})
export class RequerimentoModule {}
