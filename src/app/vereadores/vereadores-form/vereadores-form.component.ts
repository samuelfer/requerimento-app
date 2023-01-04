import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MensagemService } from 'src/app/service/mensagemService';
import { TipoPessoaEnum } from 'src/app/shared/enum/tipo-pessoa.enum';
import { Cargo } from 'src/app/shared/model/cargo.model';
import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';
import { TipoPessoaService } from 'src/app/tipo-pessoa/tipo-pessoa.service';

import { VereadoresService } from '../vereadores.service';
import { AssessoresService } from './../../assessores/assessores.service';
import { CargosService } from './../../cargos/cargos.service';
import { Assessor } from './../../shared/model/assessor.model';
import { Vereador } from './../../shared/model/vereador.model';

@Component({
  selector: 'app-vereadores-form',
  templateUrl: './vereadores-form.component.html',
  styleUrls: ['./vereadores-form.component.scss'],
})
export class VereadoresFormComponent implements OnInit {
  pessoa: Vereador = {
    nome: '',
    cargo: new Cargo(),
    ativo: true,
    tipoPessoa: new TipoPessoa(),
  };
  pessoaId: string | null;
  tipoPessoaList: TipoPessoa[];
  cargosList: Cargo[];
  assessorList: Assessor[];
  titulo = 'Cadastrar vereador';

  constructor(
    private vereadorService: VereadoresService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute,
    private tipoPessoaService: TipoPessoaService,
    private cargoService: CargosService,
    private assessorService: AssessoresService
  ) {}

  ngOnInit(): void {
    this.getTipoPessoas();
    this.getCargos();
    this.getAssessores();
    this.pessoaId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.pessoaId !== null) {
      this.titulo = 'Editar vereador';
      this.findById(+this.pessoaId);
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.preencheTipoPessoa();
      this.vereadorService.cadastrar(this.pessoa).subscribe(
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
      this.preencheTipoPessoa();
      this.vereadorService.atualizar(this.pessoa).subscribe(
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

  private preencheTipoPessoa(): void {
    const tipo = this.tipoPessoaList.find(
      (tp) => tp.id === TipoPessoaEnum.TIPO_ASSESSOR
    );
    this.pessoa.tipoPessoa = tipo!; //Exclamacao informa que tenho certeza que o valor nao eh nulo
  }

  private redirect() {
    this.router.navigate(['vereadores']);
  }

  private validaCampos(): boolean {
    if (this.pessoa.nome === null || this.pessoa.nome === undefined) {
      this.mensagemService.mensagemAlerta('Por favor, informe o nome');
      return false;
    }
    return true;
  }

  private findById(requerimentoId: number): void {
    this.vereadorService.listarPorId(requerimentoId).subscribe(
      (response) => {
        this.pessoa = response;
      },
      (error) => {
        this.mensagemService.mensagemError(error, 'Erro ao tentar listar');
      }
    );
  }

  public getTipoPessoas(): void {
    this.tipoPessoaService.listarTipoPessoas().subscribe(
      (response) => {
        this.tipoPessoaList = response;
      },
      (error) => {
        this.mensagemService.mensagemError(error, 'Erro ao tentar listar');
      }
    );
  }

  private getCargos(): void {
    this.cargoService.listarTodos().subscribe(
      (response) => {
        this.cargosList = response;
      },
      (error) => {
        this.mensagemService.mensagemError(error, 'Erro ao tentar listar');
      }
    );
  }

  private getAssessores(): void {
    this.assessorService.listarTodos().subscribe(
      (response) => {
        this.assessorList = response;
      },
      (error) => {
        this.mensagemService.mensagemError(error, 'Erro ao tentar listar');
      }
    );
  }
}
