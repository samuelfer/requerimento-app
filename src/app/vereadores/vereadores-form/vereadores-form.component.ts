import { Vereador } from './../../shared/model/vereador.model';
import { AssessoresService } from './../../assessores/assessores.service';
import { Assessor } from './../../shared/model/assessor.model';
import { CargosService } from './../../cargos/cargos.service';
import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';
import { Pessoa } from '../../shared/model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VereadoresService } from '../vereadores.service';
import { TipoPessoaService } from 'src/app/tipo-pessoa/tipo-pessoa.service';
import { Cargo } from 'src/app/shared/model/cargo.model';
import { TipoPessoaEnum } from 'src/app/shared/enum/tipo-pessoa.enum';

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

  constructor(
    private vereadorService: VereadoresService,
    private router: Router,
    private toastr: ToastrService,
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
      this.findById(+this.pessoaId);
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.preencheTipoPessoa();
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
      this.preencheTipoPessoa();
      this.vereadorService.atualizar(this.pessoa).subscribe(
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

  private getAssessores(): void {
    this.assessorService.listarTodos().subscribe(
      (response) => {
        this.assessorList = response;
      },
      (error) => {
        this.toastr.error(error.error.error);
      }
    );
  }
}
