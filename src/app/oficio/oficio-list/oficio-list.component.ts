import { MensagemService } from './../../service/mensagemService';
import { Component, OnInit } from '@angular/core';

import { Oficio } from './../../shared/model/oficio.model';
import { OficioService } from './../oficio.service';

@Component({
  selector: 'app-oficio-list',
  templateUrl: './oficio-list.component.html',
  styleUrls: ['./oficio-list.component.scss'],
})
export class OficioListComponent implements OnInit {
  oficioList: Oficio[];
  loading = false;

  constructor(
    private oficioService: OficioService,
    private mensagemService: MensagemService
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.oficioService.listarTodos().subscribe(
      (response: Oficio[]): void => {
        this.oficioList = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar listar os ofícios!'
        );
      }
    );
  }

  gerarPdf(oficio: Oficio): void {
    this.oficioService.gerarPdf(oficio).subscribe(
      (data) => {
        data = new Blob([data], { type: 'application/pdf' });
        const objUrl = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = objUrl;
        a.target = '_blank';
        a.download = 'oficio' + oficio.id + '.pdf';
        window.document.body.appendChild(a);
        a.click();
        a.remove();
        this.mensagemService.mensagemSucesso(
          'O PDF está sendo gerado..., Aguarde'
        );
      },

      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Desculpe, ocorreu um erro ao tentar gerar o PDF!'
        );
      }
    );
  }
}
