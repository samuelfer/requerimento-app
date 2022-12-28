import { Pessoa } from '../../shared/model/pessoa.model';
import { VereadoresService } from '../vereadores.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './vereadores-list.component.html',
  styleUrls: ['./vereadores-list.component.scss'],
})
export class VereadoresListComponent implements OnInit {
  constructor(
    private vereadorService: VereadoresService,
    private toastr: ToastrService
  ) {}

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
      () => {
        this.loading = false;
        this.toastr.error('Ocorreu um erro ao tentar listar os registros');
      }
    );
  }
}
