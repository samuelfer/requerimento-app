import { Pessoa } from './../../shared/pessoa.model';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss'],
})
export class PessoaListComponent implements OnInit {
  constructor(private pessoaService: PessoaService) {}

  pessoaList: Pessoa[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.pessoaService.listarTodos().subscribe(
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
