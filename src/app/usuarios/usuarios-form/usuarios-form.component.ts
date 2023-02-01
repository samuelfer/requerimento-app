import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/service/mensagemService';
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
    username: '',
    ativo: true,
    senha: '',
  };
  pessoaId: string | null;

  opcoesStatus = [
    { value: true, descricao: 'Sim' },
    { value: false, descricao: 'Não' },
  ];
  titulo = 'Cadastrar usuário';

  constructor(
    private usuarioService: UsuariosService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pessoaId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.pessoaId !== null) {
      this.titulo = 'Editar usuário';
      this.findById(+this.pessoaId);
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.usuarioService.cadastrar(this.pessoa).subscribe(
        () => {
          this.mensagemService.mensagemSucesso(
            'Cadastro realizado com sucesso'
          );
          this.redirect();
        },
        (error) => {
          this.mensagemService.mensagemError(
            error,
            'Ocorreu um erro! Erro ao tentar cadastrar'
          );
        }
      );
    }
  }

  atualizar(): void {
    if (this.validaCampos()) {
      this.usuarioService.atualizar(this.pessoa).subscribe(
        () => {
          this.mensagemService.mensagemSucesso(
            'Registro atualizado com sucesso'
          );
          this.redirect();
        },
        (error) => {
          this.mensagemService.mensagemError(
            error,
            'Ocorreu um erro! Erro ao tentar atualizar'
          );
        }
      );
    }
  }

  private redirect() {
    this.router.navigate(['usuarios']);
  }

  private validaCampos(): boolean {
    if (this.pessoa.nome === null || this.pessoa.nome === '') {
      this.mensagemService.mensagemAlerta('Por favor, informe o nome');
      return false;
    }
    if (this.pessoa.username === null || this.pessoa.username === '') {
      this.mensagemService.mensagemAlerta('Por favor, informe o email');
      return false;
    }
    if (this.pessoa.senha === null || this.pessoa.senha === '') {
      this.mensagemService.mensagemAlerta('Por favor, informe a senha');
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
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar listar'
        );
      }
    );
  }
}
