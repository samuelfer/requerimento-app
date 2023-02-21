import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/service/mensagemService';

import { Usuario } from '../../shared/model/usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss'],
})
export class UsuariosListComponent implements OnInit {
  constructor(
    private usuarioService: UsuariosService,
    private mensagemService: MensagemService
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
}
