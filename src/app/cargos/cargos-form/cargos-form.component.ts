import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/service/mensagemService';

import { Cargo } from '../../shared/model/cargo.model';
import { CargosService } from './../cargos.service';

@Component({
  selector: 'app-cargos-form',
  templateUrl: './cargos-form.component.html',
  styleUrls: ['./cargos-form.component.scss'],
})
export class CargosFormComponent implements OnInit {
  cargo: Cargo = {
    descricao: '',
    ativo: true,
  };
  cargoId: string | null;
  titulo = 'Cadastrar cargo';

  constructor(
    private cargoService: CargosService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargoId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.cargoId !== null) {
      this.titulo = 'Editar cargo';
      this.findById(+this.cargoId);
    }
  }
  cadastrar(): void {
    if (this.validaCampos()) {
      this.cargoService.cadastrar(this.cargo).subscribe(
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
      this.cargoService.atualizar(this.cargo).subscribe(
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
    this.router.navigate(['cargos']);
  }

  private validaCampos(): boolean {
    if (this.cargo.descricao === null || this.cargo.descricao === '') {
      this.mensagemService.mensagemAlerta('Por favor, informe a descrição');
      return false;
    }
    return true;
  }

  private findById(requerimentoId: number): void {
    this.cargoService.listarPorId(requerimentoId).subscribe(
      (response) => {
        this.cargo = response;
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
