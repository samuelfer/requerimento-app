import { AssessoresService } from './../assessores.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servidores-list',
  templateUrl: './assessores-list.component.html',
  styleUrls: ['./assessores-list.component.scss'],
})
export class AssessoresListComponent implements OnInit {
  constructor(
    private acessoresService: AssessoresService,
    private toastr: ToastrService
  ) {}

  pessoaList: Pessoa[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.acessoresService.listarTodos().subscribe(
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
