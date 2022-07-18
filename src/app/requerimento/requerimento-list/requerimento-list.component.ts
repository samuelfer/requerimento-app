import { RequerimentoService } from './../requerimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requerimento-list',
  templateUrl: './requerimento-list.component.html',
  styleUrls: ['./requerimento-list.component.scss'],
})
export class RequerimentoListComponent implements OnInit {
  requerimento: any;
  loading = false;
  constructor(private requerimentoService: RequerimentoService) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.requerimentoService.listarRequerimentos(2).subscribe(
      (response): void => {
        this.requerimento = response;
        console.log(response);
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
