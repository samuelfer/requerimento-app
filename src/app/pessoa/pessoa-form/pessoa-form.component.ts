import { Pessoa } from './../../shared/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss'],
})
export class PessoaFormComponent implements OnInit {
  pessoa: Pessoa = {
    nome: '',
    cargo: 'Vereador',
  };

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    if (this.validaCampos()) {
      this.pessoaService.cadastrar(this.pessoa).subscribe(
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
    this.router.navigate(['vereadores']);
  }

  private validaCampos(): boolean {
    if (this.pessoa.nome === null || this.pessoa.nome === undefined) {
      this.toastr.error('Por favor, informe o nome');
      return false;
    }
    return true;
  }
}
