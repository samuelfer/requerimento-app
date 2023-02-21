import { UsuarioPerfilComponent } from './../shared/componentes/modal/usuario-perfil/usuario-perfil.component';
import { UsuariosRoutes } from './usuarios.routing';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosFormComponent,
    UsuarioPerfilComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutes,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
    CheckboxModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsuariosModule {}
