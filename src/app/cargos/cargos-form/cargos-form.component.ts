import { CargosService } from './../cargos.service';
import { Cargo } from '../../shared/model/cargo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private cargoService: CargosService,
    private router: Router,
    private toastr: ToastrService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargoId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.cargoId !== null) {
      this.findById(+this.cargoId);
    }
  }
  cadastrar(): void {
    if (this.validaCampos()) {
      this.cargoService.cadastrar(this.cargo).subscribe(
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
      this.cargoService.atualizar(this.cargo).subscribe(
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
    this.router.navigate(['cargos']);
  }

  private validaCampos(): boolean {
    if (this.cargo.descricao === null || this.cargo.descricao === '') {
      this.toastr.error('Por favor, informe a descrição');
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
        this.toastr.error(error.error.error);
      }
    );
  }
}
