import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from '../usuarios.service';

import { Usuario } from '../../shared/model/usuario.model';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss'],
})
export class UsuariosListComponent implements OnInit {
  constructor(
    private usuarioService: UsuariosService,
    private toastr: ToastrService
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
      () => {
        this.loading = false;
        this.toastr.error('Ocorreu um erro ao tentar listar os registros');
      }
    );
  }
}
