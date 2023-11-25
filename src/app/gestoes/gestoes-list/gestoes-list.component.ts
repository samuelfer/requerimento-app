import { Component } from '@angular/core';
import { GestoesService } from '../gestoes.service';
import { ToastrService } from 'ngx-toastr';
import { Gestao } from 'src/app/shared/model/gestao.model';

@Component({
  selector: 'app-gestoes-list',
  templateUrl: './gestoes-list.component.html',
  styleUrls: ['./gestoes-list.component.scss'],
})
export class GestoesListComponent {
  constructor(
    private gestaoService: GestoesService,
    private toastr: ToastrService
  ) {}

  gestaoList: Gestao[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.gestaoService.listarTodos().subscribe(
      (response: Gestao[]): void => {
        this.gestaoList = response;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.toastr.error('Ocorreu um erro ao tentar listar os registros');
      }
    );
  }
}
