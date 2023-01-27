import { Pessoa } from '../../shared/model/pessoa.model';
import { VereadorService } from './../vereador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './vereador-list.component.html',
  styleUrls: ['./vereador-list.component.scss'],
})
export class VereadorListComponent implements OnInit {
  constructor(private vereadorService: VereadorService) {}

  pessoaList: Pessoa[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.vereadorService.listarTodos().subscribe(
      (response: Pessoa[]): void => {
        this.pessoaList = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
