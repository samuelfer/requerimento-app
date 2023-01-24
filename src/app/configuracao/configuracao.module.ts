import { UploadComponent } from './../shared/componentes/upload/upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';

import { ConfiguracaoComponent } from './configuracao.component';
import { ConfiguracaoRoutes } from './configuracao.routing';

@NgModule({
  declarations: [ConfiguracaoComponent, UploadComponent],
  imports: [
    CommonModule,
    ConfiguracaoRoutes,
    FormsModule,
    ButtonModule,
    InputTextModule,
    EditorModule,
    FileUploadModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConfiguracaoModule {}
