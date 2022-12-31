import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/shared/model/usuario.mode';

import { UsuariosService } from './../usuarios.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss'],
})
export class UsuariosFormComponent implements OnInit {
  pessoa: Usuario = {
    nome: '',
    email: '',
    ativo: true,
    senha: '',
  };
  pessoaId: string | null;

  opcoesStatus = [
    { value: true, descricao: 'Sim' },
    { value: false, descricao: 'Não' },
  ];

  constructor(
    private usuarioService: UsuariosService,
    private router: Router,
    private toastr: ToastrService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pessoaId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.pessoaId !== null) {
      this.findById(+this.pessoaId);
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.usuarioService.cadastrar(this.pessoa).subscribe(
        () => {
          this.toastr.success('Cadastro realizado com sucesso');
          this.redirect();
        },
        () => {
          this.toastr.error('Ocorreu um erro!', 'Erro ao tentar cadastrar');
        }
      );
    }
  }

  atualizar(): void {
    if (this.validaCampos()) {
      this.usuarioService.atualizar(this.pessoa).subscribe(
        () => {
          this.toastr.success('Registro atualizado com sucesso');
          this.redirect();
        },
        () => {
          this.toastr.error('Ocorreu um erro!', 'Erro ao tentar atualizar');
        }
      );
    }
  }

  private redirect() {
    this.router.navigate(['usuarios']);
  }

  private validaCampos(): boolean {
    if (this.pessoa.nome === null || this.pessoa.nome === '') {
      this.toastr.error('Por favor, informe o nome');
      return false;
    }
    if (this.pessoa.email === null || this.pessoa.email === '') {
      this.toastr.error('Por favor, informe o email');
      return false;
    }
    if (this.pessoa.senha === null || this.pessoa.senha === '') {
      this.toastr.error('Por favor, informe a senha');
      return false;
    }
    return true;
  }

  private findById(requerimentoId: number): void {
    this.usuarioService.listarPorId(requerimentoId).subscribe(
      (response) => {
        this.pessoa = response;
      },
      (error) => {
        this.toastr.error(error.error.error);
      }
    );
  }
}
