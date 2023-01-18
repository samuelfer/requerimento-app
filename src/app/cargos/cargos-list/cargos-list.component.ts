import { Component, OnInit } from '@angular/core';

import { Cargo } from '../../shared/model/cargo.model';
import { CargosService } from '../cargos.service';
import { MensagemService } from './../../service/mensagemService';

@Component({
  selector: 'app-cargos-list',
  templateUrl: './cargos-list.component.html',
  styleUrls: ['./cargos-list.component.scss'],
})
export class CargosListComponent implements OnInit {
  constructor(
    private cargoService: CargosService,
    private mensagemService: MensagemService
  ) {}

  cargosList: Cargo[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.cargoService.listarTodos().subscribe(
      (response: Cargo[]): void => {
        this.cargosList = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar listar os registros'
        );
      }
    );
  }
}
