import { ServidoresService } from './../servidores.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servidores-list',
  templateUrl: './servidores-list.component.html',
  styleUrls: ['./servidores-list.component.scss'],
})
export class ServidoresListComponent implements OnInit {
  constructor(
    private servidoresService: ServidoresService,
    private toastr: ToastrService
  ) {}

  pessoaList: Pessoa[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.servidoresService.listarTodos().subscribe(
      (response: Pessoa[]): void => {
        this.pessoaList = response;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.toastr.error('Ocorreu um erro ao tentar listar os registros');
      }
    );
  }
}
