import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';
import { TipoPessoaService } from 'src/app/tipo-pessoa/tipo-pessoa.service';

import { CargosService } from './../../cargos/cargos.service';
import { TipoPessoaEnum } from './../../shared/enum/tipo-pessoa.enum';
import { Cargo } from './../../shared/model/cargo.model';
import { Servidor } from './../../shared/model/servidor.model';
import { ServidoresService } from './../servidores.service';

@Component({
  selector: 'app-servidores-form',
  templateUrl: './servidores-form.component.html',
  styleUrls: ['./servidores-form.component.scss'],
})
export class ServidoresFormComponent implements OnInit {
  pessoa: Servidor = {
    nome: '',
    cargo: new Cargo(),
    tipoPessoa: new TipoPessoa(),
    ativo: true,
  };
  pessoaId: string | null;
  tipoPessoaList: TipoPessoa[];
  cargosList: Cargo[];

  opcoesStatus = [
    { value: true, descricao: 'Sim' },
    { value: false, descricao: 'Não' },
  ];

  constructor(
    private servidoresService: ServidoresService,
    private router: Router,
    private toastr: ToastrService,
    private activedRoute: ActivatedRoute,
    private tipoPessoaService: TipoPessoaService,
    private cargoService: CargosService
  ) {}

  ngOnInit(): void {
    this.getTipoPessoas();
    this.getCargos();
    this.pessoaId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.pessoaId !== null) {
      this.findById(+this.pessoaId);
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.preencheTipoPessoa();
      this.servidoresService.cadastrar(this.pessoa).subscribe(
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
      this.servidoresService.atualizar(this.pessoa).subscribe(
        () => {
          this.toastr.success('Registro atualizado com sucesso');
          this.redirect();
        },
        (error) => {
          this.toastr.error('Ocorreu um erro!', 'Erro ao tentar atualizar');
        }
      );
    }
  }

  private redirect() {
    this.router.navigate(['servidores']);
  }

  private preencheTipoPessoa(): void {
    const tipo = this.tipoPessoaList.find(
      (tp) => tp.id === TipoPessoaEnum.TIPO_SERVIDOR
    );
    this.pessoa.tipoPessoa = tipo!; //Exclamacao informa que tenho certeza que o valor nao eh nulo
  }

  private validaCampos(): boolean {
    if (this.pessoa.nome === null || this.pessoa.nome === undefined) {
      this.toastr.error('Por favor, informe o nome');
      return false;
    }

    if (this.pessoa.cargo === null || this.pessoa.cargo === undefined) {
      this.toastr.error('Por favor, informe o cargo');
      return false;
    }
    return true;
  }

  private findById(requerimentoId: number): void {
    this.servidoresService.listarPorId(requerimentoId).subscribe(
      (response) => {
        this.pessoa = response;
      },
      (error) => {
        this.toastr.error(error.error.error);
      }
    );
  }

  private getTipoPessoas(): void {
    this.tipoPessoaService.listarTipoPessoas().subscribe(
      (response) => {
        this.tipoPessoaList = response;
      },
      (error) => {
        this.toastr.error(error.error.error);
      }
    );
  }

  private getCargos(): void {
    this.cargoService.listarTodos().subscribe(
      (response) => {
        this.cargosList = response;
      },
      (error) => {
        this.toastr.error(error.error.error);
      }
    );
  }
}
