import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PessoaService } from './../../pessoa/pessoa.service';
import { Pessoa } from '../../shared/model/pessoa.model';
import { Requerimento } from '../../shared/model/requerimento.model';
import { RequerimentoService } from './../requerimento.service';

@Component({
  selector: 'app-requerimento-form',
  templateUrl: './requerimento-form.component.html',
  styleUrls: ['./requerimento-form.component.scss'],
})
export class RequerimentoFormComponent implements OnInit {
  vereadorList: Pessoa[];

  requerimento: Requerimento = {
    pessoa: new Pessoa(),
    assunto: '',
    numero: '',
    dataRequerimento: new Date(),
  };
  requerimentoId: string | null;

  constructor(
    private requerimentoService: RequerimentoService,
    private pessoaService: PessoaService,
    private router: Router,
    private toastr: ToastrService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listarVereadores();
    this.requerimentoId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.requerimentoId !== null) {
      this.findById(+this.requerimentoId);
    }
  }

  public listarVereadores() {
    this.pessoaService.listarTodos().subscribe(
      (response: Pessoa[]): void => {
        this.vereadorList = response;
      },
      (error) => {}
    );
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.requerimentoService.cadastrar(this.requerimento).subscribe(
        (response) => {
          this.toastr.success('Cadastro realizado com sucesso');
          this.redirect();
        },
        (error) => {
          console.log(error);
          this.toastr.error('Ocorreu um erro!', 'Erro ao tentar cadastrar');
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
      this.toastr.error('Por favor, informe o vereador');
      return false;
    }

    if (
      this.requerimento.assunto === null ||
      this.requerimento.assunto === undefined
    ) {
      this.toastr.error('Por favor, informe o assunto do requerimento');
      return false;
    }
    return true;
  }

  findById(requerimentoId: number): void {
    this.requerimentoService.listarPorId(requerimentoId).subscribe(
      (response) => {
        this.requerimento = response;
      },
      (ex) => {
        this.toastr.error(ex.error.error);
      }
    );
  }
}
