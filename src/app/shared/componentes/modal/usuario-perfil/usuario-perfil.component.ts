import { Perfil } from './../../../model/perfil.model';
import { UsuarioPerfil } from './../../../model/usuario-perfil.model';
import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MensagemService } from 'src/app/service/mensagemService';
import { PerfisService } from 'src/app/perfis/perfis.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
})
export class UsuarioPerfilComponent {
  usuarioPerfil = new UsuarioPerfil();
  perfilList: Perfil[];
  perfilSelecionado: number[] = [];
  checked: boolean = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private mensagemService: MensagemService,
    private perfilService: PerfisService
  ) {
    this.listarPerfis();
  }

  ngOnInit(): void {
    this.usuarioPerfil.usuario = this.config.data;
  }

  close() {
    this.usuarioPerfil.rolesId = this.perfilSelecionado;
    if (this.usuarioPerfil !== undefined) {
      this.ref.close(this.usuarioPerfil);
    } else {
      this.mensagemService.mensagemAlerta('Informe pelo menos um perfil.');
    }
  }

  listarPerfis() {
    this.perfilService.listarTodos().subscribe(
      (response: Perfil[]): void => {
        this.perfilList = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar listar os perfis!'
        );
      }
    );
  }
}
