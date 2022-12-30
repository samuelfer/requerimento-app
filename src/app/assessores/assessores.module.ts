import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

import { AssessoresFormComponent } from './assessores-form/assessores-form.component';
import { AssessoresListComponent } from './assessores-list/assessores-list.component';
import { AssessoresRoutes } from './assessores.routing';

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
    DropdownModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AssessoresModule {}
