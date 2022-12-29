import { Cargo } from '../../shared/model/cargo.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CargosService } from '../cargos.service';

@Component({
  selector: 'app-cargos-list',
  templateUrl: './cargos-list.component.html',
  styleUrls: ['./cargos-list.component.scss'],
})
export class CargosListComponent implements OnInit {
  constructor(
    private cargoService: CargosService,
    private toastr: ToastrService
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
      () => {
        this.loading = false;
        this.toastr.error('Ocorreu um erro ao tentar listar os registros');
      }
    );
  }
}
