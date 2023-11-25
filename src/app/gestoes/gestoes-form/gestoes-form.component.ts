import { Component } from '@angular/core';
import { Gestao } from 'src/app/shared/model/gestao.model';
import { GestoesService } from '../gestoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/service/mensagemService';

@Component({
  selector: 'app-gestoes-form',
  templateUrl: './gestoes-form.component.html',
  styleUrls: ['./gestoes-form.component.scss'],
})
export class GestoesFormComponent {
  gestao: Gestao = {
    ativa: true,
    dataInicio: new Date(),
    dataFim: new Date(),
  };
  gestaoId: string | null;
  titulo = 'Cadastrar gestão';

  constructor(
    private gestaoService: GestoesService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.gestaoId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.gestaoId !== null) {
      this.titulo = 'Editar gestão';
      this.findById(+this.gestaoId);
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.gestao.ativa = true;
      this.gestaoService.cadastrar(this.gestao).subscribe(
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
      this.gestaoService.atualizar(this.gestao).subscribe(
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
    this.router.navigate(['gestoes']);
  }

  private validaCampos(): boolean {
    if (
      this.gestao.dataInicio === null ||
      this.gestao.dataInicio === undefined
    ) {
      this.mensagemService.mensagemAlerta(
        'Por favor, informe o início da gestão'
      );
      return false;
    }

    if (this.gestao.dataFim === null || this.gestao.dataFim === undefined) {
      this.mensagemService.mensagemAlerta('Por favor, informe o fim da gestão');
      return false;
    }
    return true;
  }

  private findById(gestaoId: number): void {
    this.gestaoService.listarPorId(gestaoId).subscribe(
      (response) => {
        this.gestao = response;
      },
      (error) => {
        this.mensagemService.mensagemError(error, 'Erro ao tentar listar');
      }
    );
  }
}
