import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ConfiguracaoComponent } from './configuracao.component';
import { ConfiguracaoRoutes } from './configuracao.routing';

@NgModule({
  declarations: [ConfiguracaoComponent],
  imports: [
    CommonModule,
    ConfiguracaoRoutes,
    FormsModule,
    ButtonModule,
    InputTextModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConfiguracaoModule {}
