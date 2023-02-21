import { PerfisRoutes } from './perfis.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfisFormComponent } from './perfis-form/perfis-form.component';
import { PerfisListComponent } from './perfis-list/perfis-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [PerfisFormComponent, PerfisListComponent],
  imports: [
    CommonModule,
    PerfisRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
    ConfirmPopupModule,
  ],
  providers: [ConfirmationService],
})
export class PerfisModule {}
