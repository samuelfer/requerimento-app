import { Perfil } from './../../shared/model/perfil.model';
import { MensagemService } from 'src/app/service/mensagemService';
import { PerfisService } from './../perfis.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-perfis-list',
  templateUrl: './perfis-list.component.html',
  styleUrls: ['./perfis-list.component.scss'],
})
export class PerfisListComponent {
  constructor(
    private perfilService: PerfisService,
    private mensagemService: MensagemService
  ) {}

  perfilList: Perfil[];
  loading = false;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.perfilService.listarTodos().subscribe(
      (response: Perfil[]): void => {
        this.perfilList = response;
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

  public deletar(perfilId: number): void {
    this.perfilService.deletar(perfilId).subscribe(
      () => {
        this.mensagemService.mensagemSucesso('Registro excluído com sucesso');
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar excluir'
        );
      }
    );
  }
}
