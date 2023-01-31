import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/service/mensagemService';

import { Dashboard } from './../../shared/dashboard-count.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  loading = false;
  qtdVereador = 0;
  qtdUsuario = 0;
  qtdRequerimento = 0;
  qtdServidor = 0;
  qtdOficio = 0;

  constructor(
    private dashboardService: DashboardService,
    private mensagemService: MensagemService
  ) {}

  ngOnInit(): void {
    this.listarCount();
  }

  public listarCount() {
    this.loading = true;
    this.dashboardService.counts().subscribe(
      (response: Dashboard): void => {
        this.qtdVereador = response.qtdVereador;
        this.qtdServidor = response.qtdServidor;
        this.qtdRequerimento = response.qtdRequerimento;
        this.qtdUsuario = response.qtdUsuario;
        this.qtdOficio = response.qtdOficio;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro! Erro ao tentar listar os quantitativos'
        );
      }
    );
  }
}
