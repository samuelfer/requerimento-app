import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Assessor } from './../../shared/model/assessor.model';
import { AssessoresService } from './../assessores.service';

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

  pessoaList: Assessor[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.acessoresService.listarTodos().subscribe(
      (response: Assessor[]): void => {
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
