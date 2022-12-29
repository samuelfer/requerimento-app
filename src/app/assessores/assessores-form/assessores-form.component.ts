import { TipoPessoaEnum } from '../../shared/enum/tipo-pessoa.enum';
import { AssessoresService } from '../assessores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoPessoaService } from 'src/app/tipo-pessoa/tipo-pessoa.service';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';

@Component({
  selector: 'app-servidores-form',
  templateUrl: './assessores-form.component.html',
  styleUrls: ['./assessores-form.component.scss'],
})
export class AssessoresFormComponent implements OnInit {
  pessoa: Pessoa = {
    nome: '',
    cargo: '',
    tipoPessoa: new TipoPessoa(),
  };
  pessoaId: string | null;
  tipoPessoaList: TipoPessoa[];

  constructor(
    private assessoresService: AssessoresService,
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
}
