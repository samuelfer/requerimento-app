import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';
import { TipoPessoaService } from 'src/app/tipo-pessoa/tipo-pessoa.service';

import { TipoPessoaEnum } from '../../shared/enum/tipo-pessoa.enum';
import { AssessoresService } from '../assessores.service';
import { Assessor } from './../../shared/model/assessor.model';
import { Vereador } from './../../shared/model/vereador.model';
import { VereadoresService } from './../../vereadores/vereadores.service';

@Component({
  selector: 'app-servidores-form',
  templateUrl: './assessores-form.component.html',
  styleUrls: ['./assessores-form.component.scss'],
})
export class AssessoresFormComponent implements OnInit {
  pessoa: Assessor = {
    nome: '',
    tipoPessoa: new TipoPessoa(),
    ativo: true,
    vereador: new Vereador(),
  };
  pessoaId: string | null;
  tipoPessoaList: TipoPessoa[];
  vereadorList: Vereador[];
  titulo = 'Cadastrar assessor';
  opcoesStatus = [
    { value: true, descricao: 'Sim' },
    { value: false, descricao: 'Não' },
  ];

  constructor(
    private assessoresService: AssessoresService,
    private router: Router,
    private toastr: ToastrService,
    private activedRoute: ActivatedRoute,
    private tipoPessoaService: TipoPessoaService,
    private vereadorService: VereadoresService
  ) {}

  ngOnInit(): void {
    this.getTipoPessoas();
    this.getVereadores();
    this.pessoaId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.pessoaId !== null) {
      this.titulo = 'Editar assessor';
      this.findById(+this.pessoaId);
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.preencheTipoPessoa();
      this.assessoresService.cadastrar(this.pessoa).subscribe(
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
      this.preencheTipoPessoa();
      this.assessoresService.atualizar(this.pessoa).subscribe(
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
    this.router.navigate(['assessores']);
  }

  private preencheTipoPessoa(): void {
    const tipo = this.tipoPessoaList.find(
      (tp) => tp.id === TipoPessoaEnum.TIPO_ASSESSOR
    );
    this.pessoa.tipoPessoa = tipo!; //Exclamacao informa que tenho certeza que o valor nao eh nulo
  }

  private validaCampos(): boolean {
    if (this.pessoa.nome === null || this.pessoa.nome === undefined) {
      this.toastr.error('Por favor, informe o nome');
      return false;
    }
    return true;
  }

  private findById(assessorId: number): void {
    this.assessoresService.listarPorId(assessorId).subscribe(
      (response) => {
        this.pessoa = response;
      },
      (error) => {
        this.toastr.error(error.error.error);
      }
    );
  }

  public getTipoPessoas(): void {
    this.tipoPessoaService.listarTipoPessoas().subscribe(
      (response) => {
        this.tipoPessoaList = response;
      },
      (error) => {
        this.toastr.error(error.error.error);
      }
    );
  }

  private getVereadores(): void {
    this.vereadorService.listarTodos().subscribe(
      (response) => {
        this.vereadorList = response;
      },
      (error) => {
        this.toastr.error(error.error.error);
      }
    );
  }
}
