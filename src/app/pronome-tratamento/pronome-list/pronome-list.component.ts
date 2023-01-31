import { PronomeTratamentoService } from './../pronome-tratamento.service';
import { Component } from '@angular/core';
import { MensagemService } from 'src/app/service/mensagemService';
import { PronomeTratamento } from 'src/app/shared/model/pronome-tratamento.model';

@Component({
  selector: 'app-pronome-list',
  templateUrl: './pronome-list.component.html',
  styleUrls: ['./pronome-list.component.scss'],
})
export class PronomeListComponent {
  constructor(
    private pronomeTratamentoService: PronomeTratamentoService,
    private mensagemService: MensagemService
  ) {}

  pronomesList: PronomeTratamento[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.pronomeTratamentoService.listarTodos().subscribe(
      (response: PronomeTratamento[]): void => {
        this.pronomesList = response;
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
