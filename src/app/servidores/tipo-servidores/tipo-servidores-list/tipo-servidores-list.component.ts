import { Component, OnInit } from '@angular/core';
import { TipoServidoresService } from '../../tipo-servidores.service';
import { ToastrService } from 'ngx-toastr';
import { TipoServidor } from 'src/app/shared/model/tipo-servidor.model';

@Component({
  selector: 'app-tipo-servidores-list',
  templateUrl: './tipo-servidores-list.component.html',
  styleUrls: ['./tipo-servidores-list.component.scss']
})
export class TipoServidorListComponent implements OnInit {

  tipoServidorList: TipoServidor[];
  loading = false;

  constructor(
    private tipoServidorService: TipoServidoresService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.tipoServidorService.listarTodos().subscribe(
      (response: TipoServidor[]): void => {
        this.tipoServidorList = response;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.toastr.error('Ocorreu um erro ao tentar listar os registros');
      }
    );
  }

}
