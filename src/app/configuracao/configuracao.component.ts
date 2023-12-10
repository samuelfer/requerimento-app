import { ConfiguracaoService } from './configuracao.service';
import { Component, OnInit } from '@angular/core';
import { Configuracao } from '../shared/model/configuracao.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from '../service/mensagemService';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.scss'],
})
export class ConfiguracaoComponent implements OnInit {
  configuracao: Configuracao = {
    nome: '',
    logo: '',
    logoDocumento: '',
    textoPadraoRequerimento: '',
    textoPadraoOficio: '',
  };
  configuracaoId: string | null;

  titulo = 'Cadastrar configuração';
  tipoArquivo = 'Logo_requerimento';

  constructor(
    private configuracaoService: ConfiguracaoService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.configuracaoId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.configuracaoId !== null) {
      this.titulo = 'Editar configuração';
      this.findById();
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.configuracaoService.cadastrar(this.configuracao).subscribe(
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
      this.configuracaoService.atualizar(this.configuracao).subscribe(
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
    this.router.navigate(['configuracoes/editar']);
  }

  private validaCampos(): boolean {
    if (this.configuracao.nome === null || this.configuracao.nome === '') {
      this.mensagemService.mensagemAlerta('Por favor, informe o nome');
      return false;
    }
    return true;
  }

  private findById(): void {
    this.configuracaoService.listar().subscribe(
      (response) => {
        this.configuracao = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro! Erro ao tentar listar'
        );
      }
    );
  }
}
