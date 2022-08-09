import { ToastrService } from 'ngx-toastr';
import { Requerimento } from '../../shared/model/requerimento.model';
import { RequerimentoService } from './../requerimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requerimento-list',
  templateUrl: './requerimento-list.component.html',
  styleUrls: ['./requerimento-list.component.scss'],
})
export class RequerimentoListComponent implements OnInit {
  requerimentoList: Requerimento[];
  loading = false;
  constructor(
    private requerimentoService: RequerimentoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.requerimentoService.listarTodos().subscribe(
      (response: Requerimento[]): void => {
        this.requerimentoList = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  gerarPdf(requerimento: Requerimento): void {
    this.requerimentoService.gerarPdf(requerimento).subscribe(
      (data) => {
        data = new Blob([data], { type: 'application/pdf' });
        const objUrl = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = objUrl;
        a.target = '_blank';
        a.download = 'requerimento' + requerimento.id + '.pdf';
        window.document.body.appendChild(a);
        a.click();
        a.remove();
        this.toastr.info('O PDF está sendo gerado...', 'Aguarde');
      },

      (error) => {
        this.toastr.error(
          'Desculpe, ocorreu um erro ao tentar gerar o PDF!',
          'Atenção'
        );
      }
    );
  }
}
