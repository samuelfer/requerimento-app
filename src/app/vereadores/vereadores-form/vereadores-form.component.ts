import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';
import { Pessoa } from '../../shared/model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VereadoresService } from '../vereadores.service';
import { TipoPessoaService } from 'src/app/tipo-pessoa/tipo-pessoa.service';

@Component({
  selector: 'app-vereadores-form',
  templateUrl: './vereadores-form.component.html',
  styleUrls: ['./vereadores-form.component.scss'],
})
export class VereadoresFormComponent implements OnInit {
  pessoa: Pessoa = {
    nome: '',
    cargo: '',
    tipoPessoa: new TipoPessoa(),
  };
  pessoaId: string | null;
  tipoPessoaList: TipoPessoa[];

  constructor(
    private vereadorService: VereadoresService,
    private router: Router,
    private toastr: ToastrService,
    private activedRoute: ActivatedRoute,
    private tipoPessoaService: TipoPessoaService
  ) {}

  ngOnInit(): void {
    this.getTipoPessoas();
    this.pessoaId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.pessoaId !== null) {
      this.findById(+this.pessoaId);
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.vereadorService.cadastrar(this.pessoa).subscribe(
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
      this.vereadorService.atualizar(this.pessoa).subscribe(
        (response) => {
          this.toastr.success('Registro atualizado com sucesso');
          this.redirect();
        },
        (error) => {
          console.log(error);
          this.toastr.error('Ocorreu um erro!', 'Erro ao tentar atualizar');
        }
      );
    }
  }

  private redirect() {
    this.router.navigate(['vereadores']);
  }

  private validaCampos(): boolean {
    if (this.pessoa.nome === null || this.pessoa.nome === undefined) {
      this.toastr.error('Por favor, informe o nome');
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
}
