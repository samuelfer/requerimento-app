import { AssessoresRoutes } from './assessores.routing';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { AssessoresListComponent } from './assessores-list/assessores-list.component';
import { AssessoresFormComponent } from './assessores-form/assessores-form.component';

@NgModule({
  declarations: [AssessoresListComponent, AssessoresFormComponent],
  imports: [
    CommonModule,
    AssessoresRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AssessoresModule {}
