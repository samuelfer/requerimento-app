import { Vereador } from './../../shared/model/vereador.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VereadoresService } from '../../vereadores/vereadores.service';
import { Pessoa } from '../../shared/model/pessoa.model';
import { Requerimento } from '../../shared/model/requerimento.model';
import { RequerimentoService } from './../requerimento.service';
import { MensagemService } from 'src/app/service/mensagemService';

@Component({
  selector: 'app-requerimento-form',
  templateUrl: './requerimento-form.component.html',
  styleUrls: ['./requerimento-form.component.scss'],
})
export class RequerimentoFormComponent implements OnInit {
  vereadorList: Vereador[];
  titulo = 'Cadastrar requerimento';

  requerimento: Requerimento = {
    pessoa: new Pessoa(),
    assunto: '',
    numero: '',
    dataRequerimento: new Date(),
  };
  requerimentoId: string | null;

  constructor(
    private requerimentoService: RequerimentoService,
    private vereadorService: VereadoresService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listarVereadores();
    this.requerimentoId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.requerimentoId !== null) {
      this.titulo = 'Editar requerimento';
      this.findById(+this.requerimentoId);
    }
  }

  public listarVereadores() {
    this.vereadorService.listarTodos().subscribe(
      (response: Vereador[]): void => {
        this.vereadorList = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Erro ao tentar listar os vereadores'
        );
      }
    );
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.requerimentoService.cadastrar(this.requerimento).subscribe(
        () => {
          this.mensagemService.mensagemSucesso(
            'Cadastro realizado com sucesso'
          );
          this.redirect();
        },
        (error) => {
          this.mensagemService.mensagemError(
            error,
            'Ocorreu um erro ao tentar salvar o requerimento'
          );
        }
      );
    }
  }

  atualizar(): void {
    if (this.validaCampos()) {
      this.requerimentoService.atualizar(this.requerimento).subscribe(
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
    this.router.navigate(['requerimentos']);
  }

  private validaCampos(): boolean {
    if (
      this.requerimento.pessoa === undefined ||
      Object.keys(this.requerimento.pessoa).length === 0
    ) {
      this.mensagemService.mensagemAlerta('Por favor, informe o vereador');
      return false;
    }

    if (
      this.requerimento.assunto === null ||
      this.requerimento.assunto === undefined
    ) {
      this.mensagemService.mensagemAlerta(
        'Por favor, informe o assunto do requerimento'
      );
      return false;
    }
    return true;
  }

  private findById(requerimentoId: number): void {
    this.requerimentoService.listarPorId(requerimentoId).subscribe(
      (response) => {
        this.requerimento = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Erro ao tentar listar o requerimento'
        );
      }
    );
  }
}
