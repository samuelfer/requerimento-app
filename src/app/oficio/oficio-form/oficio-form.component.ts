import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Oficio } from 'src/app/shared/model/oficio.model';
import { Pessoa } from 'src/app/shared/model/pessoa.model';

import { MensagemService } from './../../service/mensagemService';
import { OficioService } from './../oficio.service';

@Component({
  selector: 'app-oficio-form',
  templateUrl: './oficio-form.component.html',
  styleUrls: ['./oficio-form.component.scss'],
})
export class OficioFormComponent implements OnInit {
  assinanteList: Pessoa[];
  titulo = 'Cadastrar ofício';

  oficio: Oficio = {
    assinante: new Pessoa(),
    texto: '',
    assunto: '',
    numero: '',
    dataOficio: new Date(),
    destinatario: '',
  };
  oficioId: string | null;

  constructor(
    private oficioService: OficioService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listarVereadores();
    this.oficioId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.oficioId !== null) {
      this.titulo = 'Editar ofício';
      this.findById(+this.oficioId);
    }
  }

  public listarVereadores() {
    this.oficioService.listarAssinantes().subscribe(
      (response: Pessoa[]): void => {
        this.assinanteList = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar listar os assinantes!'
        );
      }
    );
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.oficioService.cadastrar(this.oficio).subscribe(
        () => {
          this.mensagemService.mensagemSucesso(
            'Cadastro realizado com sucesso'
          );
          this.redirect();
        },
        (error) => {
          this.mensagemService.mensagemError(
            error,
            'Ocorreu um erro ao tentar salvar o ofício'
          );
        }
      );
    }
  }

  atualizar(): void {
    if (this.validaCampos()) {
      this.oficioService.atualizar(this.oficio).subscribe(
        () => {
          this.mensagemService.mensagemSucesso(
            'Registro atualizado com sucesso'
          );
          this.redirect();
        },
        (error) => {
          this.mensagemService.mensagemError(error, 'Erro ao tentar atualizar');
        }
      );
    }
  }

  private redirect() {
    this.router.navigate(['oficios']);
  }

  private validaCampos(): boolean {
    if (
      this.oficio.assinante === undefined ||
      Object.keys(this.oficio.assinante).length === 0
    ) {
      this.mensagemService.mensagemAlerta('Por favor, informe o vereador');
      return false;
    }

    if (this.oficio.texto === null || this.oficio.texto === undefined) {
      this.mensagemService.mensagemAlerta(
        'Por favor, informe o texto do ofício'
      );
      return false;
    }

    if (this.oficio.assunto === null || this.oficio.assunto === undefined) {
      this.mensagemService.mensagemAlerta(
        'Por favor, informe o assunto do ofício'
      );
      return false;
    }
    return true;
  }

  private findById(oficioId: number): void {
    this.oficioService.listarPorId(oficioId).subscribe(
      (response) => {
        this.oficio = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Erro ao tentar listar o ofício'
        );
      }
    );
  }
}