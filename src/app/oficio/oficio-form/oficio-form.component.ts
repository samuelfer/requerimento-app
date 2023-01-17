import { MensagemService } from './../../service/mensagemService';
import { OficioService } from './../oficio.service';
import { Component, OnInit } from '@angular/core';
import { Oficio } from 'src/app/shared/model/oficio.model';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { Vereador } from 'src/app/shared/model/vereador.model';
import { VereadoresService } from 'src/app/vereadores/vereadores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oficio-form',
  templateUrl: './oficio-form.component.html',
  styleUrls: ['./oficio-form.component.scss'],
})
export class OficioFormComponent implements OnInit {
  vereadorList: Vereador[];
  titulo = 'Cadastrar ofício';

  oficio: Oficio = {
    pessoa: new Pessoa(),
    texto: '',
    assunto: '',
    numero: '',
    dataOficio: new Date(),
    destinatario: '',
  };
  oficioId: string | null;

  constructor(
    private oficioService: OficioService,
    private vereadorService: VereadoresService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listarVereadores();
    this.oficioId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.oficioId !== null) {
      this.titulo = 'Editar ofício';
      this.findById(+this.oficioId);
    }
  }

  public listarVereadores() {
    this.vereadorService.listarTodos().subscribe(
      (response: Vereador[]): void => {
        this.vereadorList = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar listar os vereadores!'
        );
      }
    );
  }

  cadastrar(): void {
    if (this.validaCampos()) {
      this.oficioService.cadastrar(this.oficio).subscribe(
        () => {
          this.mensagemService.mensagemSucesso(
            'Cadastro realizado com sucesso'
          );
          this.redirect();
        },
        (error) => {
          this.mensagemService.mensagemError(
            error,
            'Ocorreu um erro ao tentar salvar o ofício'
          );
        }
      );
    }
  }

  atualizar(): void {
    if (this.validaCampos()) {
      this.oficioService.atualizar(this.oficio).subscribe(
        () => {
          this.mensagemService.mensagemSucesso(
            'Registro atualizado com sucesso'
          );
          this.redirect();
        },
        (error) => {
          this.mensagemService.mensagemError(error, 'Erro ao tentar atualizar');
        }
      );
    }
  }

  private redirect() {
    this.router.navigate(['oficios']);
  }

  private validaCampos(): boolean {
    if (
      this.oficio.pessoa === undefined ||
      Object.keys(this.oficio.pessoa).length === 0
    ) {
      this.mensagemService.mensagemAlerta('Por favor, informe o vereador');
      return false;
    }

    if (this.oficio.texto === null || this.oficio.texto === undefined) {
      this.mensagemService.mensagemAlerta(
        'Por favor, informe o texto do ofício'
      );
      return false;
    }

    if (this.oficio.assunto === null || this.oficio.assunto === undefined) {
      this.mensagemService.mensagemAlerta(
        'Por favor, informe o assunto do ofício'
      );
      return false;
    }
    return true;
  }

  private findById(oficioId: number): void {
    this.oficioService.listarPorId(oficioId).subscribe(
      (response) => {
        this.oficio = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Erro ao tentar listar o ofício'
        );
      }
    );
  }
}
