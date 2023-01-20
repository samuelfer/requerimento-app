import { FileService } from './../service/file.service';
import { OficioFormComponent } from './oficio-form/oficio-form.component';
import { OficioListComponent } from './oficio-list/oficio-list.component';
import { OficioRoutes } from './oficio.routing';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [OficioListComponent, OficioFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OficioRoutes,
    TableModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    EditorModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    TabViewModule,
    PdfViewerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: FileService }],
})
export class OficioModule {}
