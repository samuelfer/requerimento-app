import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { SenhaInputComponent } from './../shared/componentes/senha-input/senha-input.component';
import { ServidoresFormComponent } from './servidores-form/servidores-form.component';
import { ServidoresListComponent } from './servidores-list/servidores-list.component';
import { ServidoresRoutes } from './servidores.routing';
import { TipoServidorFormComponent } from './tipo-servidores/tipo-servidores-form/tipo-servidores-form.component';
import { TipoServidorListComponent } from './tipo-servidores/tipo-servidores-list/tipo-servidores-list.component';

@NgModule({
  declarations: [
    ServidoresListComponent,
    ServidoresFormComponent,
    SenhaInputComponent,
    TipoServidorFormComponent,
    TipoServidorListComponent
  ],
  imports: [
    CommonModule,
    ServidoresRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
    TooltipModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServidoresModule {}
