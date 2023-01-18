import { Component, OnInit } from '@angular/core';

import { MensagemService } from './../../service/mensagemService';
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
    private mensagemService: MensagemService
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
