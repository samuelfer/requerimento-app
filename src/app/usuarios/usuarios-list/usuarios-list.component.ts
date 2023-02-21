import { UsuarioPerfil } from './../../shared/model/usuario-perfil.model';
import { UsuarioPerfilComponent } from './../../shared/componentes/modal/usuario-perfil/usuario-perfil.component';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MensagemService } from 'src/app/service/mensagemService';

import { Usuario } from '../../shared/model/usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss'],
  providers: [DialogService],
})
export class UsuariosListComponent implements OnInit {
  ref: DynamicDialogRef;
  // usuarioPerfil = new UsuarioPerfil();

  constructor(
    private usuarioService: UsuariosService,
    private mensagemService: MensagemService,
    public dialogService: DialogService
  ) {}

  pessoaList: Usuario[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.usuarioService.listarTodos().subscribe(
      (response: Usuario[]): void => {
        this.pessoaList = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar listar os registros'
        );
      }
    );
  }

  associarUsuarioPerfil(usuario: Usuario): void {
    this.ref = this.dialogService.open(UsuarioPerfilComponent, {
      header: `Associar perfil para o usuário ${usuario.nome}`,
      width: '60%',
      data: usuario,
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
      closable: true,
    });
    this.ref.onClose.subscribe((usuarioPerfil: UsuarioPerfil) => {
      if (usuarioPerfil !== undefined) {
        this.usuarioService.associarUsuarioPerfil(usuarioPerfil).subscribe(
          () => {
            this.mensagemService.mensagemSucesso(
              'Perfil associado ao usuário com sucesso'
            );
          },
          (error) => {
            this.mensagemService.mensagemError(
              error,
              'Houve um erro ao tentar salvar o pronome'
            );
          }
        );
      }
    });
  }
}
