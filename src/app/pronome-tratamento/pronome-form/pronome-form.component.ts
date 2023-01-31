import { PronomeTratamentoService } from './../pronome-tratamento.service';
import { PronomeTratamento } from './../../shared/model/pronome-tratamento.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/service/mensagemService';

@Component({
  selector: 'app-pronome-form',
  templateUrl: './pronome-form.component.html',
  styleUrls: ['./pronome-form.component.scss'],
})
export class PronomeFormComponent implements OnInit {
  pronomeTratamento: PronomeTratamento = {
    descricao: '',
    ativo: true,
  };
  pronomeTratamentoId: string | null;
  titulo = 'Cadastrar pronome tratamento';

  constructor(
    private pronomeTratamentoService: PronomeTratamentoService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pronomeTratamentoId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.pronomeTratamentoId !== null) {
      this.titulo = 'Editar pronome tratamento';
      this.findById(+this.pronomeTratamentoId);
    }
  }
  cadastrar(): void {
    if (this.validaCampos()) {
      this.pronomeTratamentoService.cadastrar(this.pronomeTratamento).subscribe(
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
      this.pronomeTratamentoService.atualizar(this.pronomeTratamento).subscribe(
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
    this.router.navigate(['pronome-tratamento']);
  }

  private validaCampos(): boolean {
    if (
      this.pronomeTratamento.descricao === null ||
      this.pronomeTratamento.descricao === ''
    ) {
      this.mensagemService.mensagemAlerta('Por favor, informe a descrição');
      return false;
    }
    return true;
  }

  private findById(requerimentoId: number): void {
    this.pronomeTratamentoService.listarPorId(requerimentoId).subscribe(
      (response) => {
        this.pronomeTratamento = response;
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
