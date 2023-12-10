import { Component, OnInit } from '@angular/core';
import { TipoServidor } from 'src/app/shared/model/tipo-servidor.model';
import { TipoServidoresService } from '../../tipo-servidores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/service/mensagemService';

@Component({
  selector: 'app-tipo-servidores-form',
  templateUrl: './tipo-servidores-form.component.html',
  styleUrls: ['./tipo-servidores-form.component.scss']
})
export class TipoServidorFormComponent implements OnInit {

  titulo: string;
  tipoServidor: TipoServidor = {
    descricao: '',
    ativo: true,
  };
  tipoServidorId: string | null;

  constructor(private tipoServidorService: TipoServidoresService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute,) { }

    ngOnInit(): void {
      this.titulo = 'Cadastrar tipo servidor';
      this.tipoServidorId = this.activedRoute.snapshot.paramMap.get('id');
      if (this.tipoServidorId !== null) {
        this.titulo = 'Editar servidor';
        this.findById(+this.tipoServidorId);
      }
    }
  
    cadastrar(): void {
      if (this.validaCampos()) {
        this.tipoServidorService.cadastrar(this.tipoServidor).subscribe(
          () => {
            this.mensagemService.mensagemSucesso(
              'Cadastro realizado com sucesso'
            );
            this.redirect();
          },
          (error) => {
            this.mensagemService.mensagemError(
              error,
              'Ocorreu um erro! Erro ao tentar cadastrar'
            );
          }
        );
      }
    }
  
    atualizar(): void {
      if (this.validaCampos()) {
        this.tipoServidorService.atualizar(this.tipoServidor).subscribe(
          () => {
            this.mensagemService.mensagemSucesso(
              'Registro atualizado com sucesso'
            );
            this.redirect();
          },
          (error) => {
            this.mensagemService.mensagemError(
              error,
              'Ocorreu um erro! Erro ao tentar atualizar'
            );
          }
        );
      }
    }
  
    public redirect() {
      this.router.navigate(['servidores/tipo-servidor']);
    }
  
    private validaCampos(): boolean {
      if (this.tipoServidor.descricao === null || this.tipoServidor.descricao === '') {
        this.mensagemService.mensagemAlerta('Por favor, informe a descrição');
        return false;
      }
      return true;
    }

    private findById(tipoServidorId: number): void {
      this.tipoServidorService.listarPorId(tipoServidorId).subscribe(
        (response) => {
          this.tipoServidor = response;
        },
        (error) => {
          this.mensagemService.mensagemError(
            error,
            'Ocorreu um erro! Erro ao tentar listar'
          );
        }
      );
    }
}
