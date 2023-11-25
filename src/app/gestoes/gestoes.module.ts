import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestoesListComponent } from './gestoes-list/gestoes-list.component';
import { GestoesFormComponent } from './gestoes-form/gestoes-form.component';
import { GestoesRoutes } from './gestoes.routing';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [GestoesListComponent, GestoesFormComponent],
  imports: [
    CommonModule,
    GestoesRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
    CalendarModule,
  ],
})
export class GestoesModule {}
