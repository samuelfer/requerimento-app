import { Perfil } from './../../shared/model/perfil.model';
import { MensagemService } from 'src/app/service/mensagemService';
import { PerfisService } from './../perfis.service';
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-perfis-list',
  templateUrl: './perfis-list.component.html',
  styleUrls: ['./perfis-list.component.scss'],
})
export class PerfisListComponent {
  constructor(
    private perfilService: PerfisService,
    private mensagemService: MensagemService,
    private confirmationService: ConfirmationService
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

  deletar(event: Event, perfilId: number) {
    console.log();
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Tem certeza que deseja excluir o registro?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.perfilService.deletar(perfilId).subscribe(
          () => {
            this.mensagemService.mensagemSucesso(
              'Registro excluído com sucesso'
            );
            this.listar();
          },
          (error) => {
            this.mensagemService.mensagemError(
              error,
              'Ocorreu um erro ao tentar excluir'
            );
          }
        );
      },
      reject: () => {
        //reject action
      },
    });
  }
}
