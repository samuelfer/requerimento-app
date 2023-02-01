import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileService } from 'src/app/service/file.service';
import { Oficio } from 'src/app/shared/model/oficio.model';
import { Pessoa } from 'src/app/shared/model/pessoa.model';

import { ModalPronomeTratamentoComponent } from '../../shared/componentes/modal/pronome-tratamento/modal-pronome-tratamento.component';
import { PronomeTratamentoService } from './../../pronome-tratamento/pronome-tratamento.service';
import { MensagemService } from './../../service/mensagemService';
import { PronomeTratamento } from './../../shared/model/pronome-tratamento.model';
import { OficioService } from './../oficio.service';

@Component({
  selector: 'app-oficio-form',
  templateUrl: './oficio-form.component.html',
  styleUrls: ['./oficio-form.component.scss'],
  providers: [DialogService],
})
export class OficioFormComponent implements OnInit {
  assinanteList: Pessoa[];
  titulo = 'Cadastrar ofício';

  oficio: Oficio = {
    assinante: new Pessoa(),
    texto: '',
    assunto: '',
    numero: '',
    dataOficio: new Date(),
    destinatario: '',
    cargoDestinatario: '',
    pronomeTratamento: new PronomeTratamento(),
  };
  oficioId: string | null;
  public pdfSrc = '';
  pronomesList: PronomeTratamento[];
  ref: DynamicDialogRef;

  constructor(
    private oficioService: OficioService,
    private pronomeTratamentoService: PronomeTratamentoService,
    private router: Router,
    private mensagemService: MensagemService,
    private activedRoute: ActivatedRoute,
    private fileService: FileService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.listarVereadores();
    this.listarPronomes();
    this.oficioId = this.activedRoute.snapshot.paramMap.get('id');
    if (this.oficioId !== null) {
      this.titulo = 'Editar ofício';
      this.findById(+this.oficioId);
    }
  }

  listarVereadores() {
    this.oficioService.listarAssinantes().subscribe(
      (response: Pessoa[]): void => {
        this.assinanteList = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar listar os assinantes!'
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
      this.oficio.assinante === undefined ||
      Object.keys(this.oficio.assinante).length === 0
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
        this.oficio.dataOficio = new Date(response.dataOficio);
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Erro ao tentar listar o ofício'
        );
      }
    );
  }

  onTabChange(event: any) {
    if (event.index === 1) {
      this.preview();
    }
  }

  preview() {
    this.oficioService.preview(this.oficio).subscribe(
      (data) => {
        const file = this.fileService.blobToFile(data, 'Pré-visualização');
        const url = window.URL.createObjectURL(file);
        this.pdfSrc = url;
      },
      (error) =>
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro ao tentar exibir o arquivo.'
        )
    );
  }

  private listarPronomes(): void {
    this.pronomeTratamentoService.listarTodos().subscribe(
      (response) => {
        this.pronomesList = response;
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Ocorreu um erro! Erro ao tentar listar os pronomes'
        );
      }
    );
  }

  salvarPronomeTratamento(): void {
    this.ref = this.dialogService.open(ModalPronomeTratamentoComponent, {
      header: 'Pronome de tratamento',
      width: '40%',
      data: this.oficio.pronomeTratamento,
      contentStyle: { 'max-height': '350px', overflow: 'auto' },
      baseZIndex: 10000,
      closable: true,
    });

    this.ref.onClose.subscribe((pronome: PronomeTratamento) => {
      this.oficio.pronomeTratamento = pronome;
      if (pronome !== undefined) {
        this.pronomeTratamentoService.cadastrar(pronome).subscribe(
          (response) => {
            this.pronomesList.push(response);

            this.oficio.pronomeTratamento =
              this.pronomesList[this.pronomesList.length - 1];
          },
          (error) => {
            this.mensagemService.mensagemError(
              error,
              'Houve um erro ao tentar salvar o pronome'
            );
          }
        );
      }
    });
  }
}
