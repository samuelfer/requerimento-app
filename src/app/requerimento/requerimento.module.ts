import { RequerimentoRoutes } from './requerimento.routing';
import { RequerimentoFormComponent } from './requerimento-form/requerimento-form.component';
import { RequerimentoListComponent } from './requerimento-list/requerimento-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RequerimentoListComponent, RequerimentoFormComponent],
  imports: [CommonModule, RequerimentoRoutes],
})
export class RequerimentoModule {}
