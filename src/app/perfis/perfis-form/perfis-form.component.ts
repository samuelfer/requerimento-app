import { PerfisService } from './../perfis.service';
import { Component } from '@angular/core';
import { Perfil } from 'src/app/shared/model/perfil.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/service/mensagemService';

@Component({
  selector: 'app-perfis-form',
  templateUrl: './perfis-form.component.html',
  styleUrls: ['./perfis-form.component.scss'],
})
export class PerfisFormComponent {
  perfil: Perfil = {
    nome: '',
  };
  perfilId: string | null;
  titulo = 'Cadastrar perfil';

  constructor(
    private perfilService: PerfisService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.perfilId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.perfilId !== null) {
      this.titulo = 'Editar perfil';
      this.findById(+this.perfilId);
    }
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.perfilService.cadastrar(this.perfil).subscribe(
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
      this.perfilService.atualizar(this.perfil).subscribe(
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
    this.router.navigate(['admin/perfis']);
  }

  private validaCampos(): boolean {
    if (this.perfil.nome === null || this.perfil.nome === '') {
      this.mensagemService.mensagemAlerta('Por favor, informe o nome');
      return false;
    }
    return true;
  }

  private findById(requerimentoId: number): void {
    this.perfilService.listarPorId(requerimentoId).subscribe(
      (response) => {
        this.perfil = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar listar'
        );
      }
    );
  }
}
