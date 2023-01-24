import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  // @Output() arquivoIncluidoEmitter = new EventEmitter(); // emite informacao depois do upload

  // uploadedFiles: any[] = [];

  constructor() {}

  // onUpload(event: any) {
  // for (let file of event.files) {
  //   this.uploadedFiles.push(file);
  // }
  // this.messageService.add({
  //   severity: 'info',
  //   summary: 'File Uploaded',
  //   detail: '',
  // });
  // }

  ngOnInit(): void {}

  // selecionado(event) {
  //   this.setDescricaoArquivo(event);
  // }

  // onUpload(): void {
  //   // if (!this.validateDescricao(this.descricao)) {
  //   //   return;
  //   // }

  //   // if (event.files.length > 0) {
  //   //   for (const file of event.files) {
  //   //     if (!this.validateFile(file)) {
  //   //       this.uploadedFiles = [];
  //   //       return;
  //   //     } else {
  //   //       // const anexo = new Anexo(this.descricao, file);
  //   //       // if (this.uploadedFiles.filter((a) => a.file === file).length <= 0) {
  //   //       //   if (this.validateDescricao(anexo.descricao)) {
  //   //       //     this.uploadedFiles.push(anexo);
  //   //       //     this.descricao = '';
  //   //       //   }
  //   //       // }
  //   //     }
  //   //   }
  //   // }

  //   let anexo = this.uploadedFiles.pop();
  //   if (anexo) {
  //     this.uploadFile();
  //   }
  // }

  // validateDescricao(descricao: string): boolean {
  //   let isValidDescricao = true;
  //   if (descricao === '') {
  //     this.mensagemService.mensagemAlerta(
  //       'É necessário preencher a descrição do arquivo.'
  //     );
  //     isValidDescricao = false;
  //   }
  //   return isValidDescricao;
  // }

  // validateFile(file: File): boolean {
  //   let isValidFile = true;
  //   if (file.size === 0) {
  //     this.mensagemService.mensagemAlerta(
  //       'Não é possível enviar um arquivo com tamanho zero.'
  //     );
  //     isValidFile = false;
  //   }

  //   return isValidFile;
  // }

  // uploadFile(): void {
  // const idDiligencia = this.diligencia.id;
  // if (this.idSolicitacaoAlteracaoDiaria === undefined) {
  //   this.idSolicitacaoAlteracaoDiaria = 0;
  // }
  // if (this.idPagamentoDiaria === undefined) {
  //   this.idPagamentoDiaria = 0;
  // }
  // const promise = this.arquivoService
  //   .create(
  //     anexo.file,
  //     anexo.descricao,
  //     idDiligencia,
  //     this.tipoArquivo,
  //     this.idPagamentoDiaria,
  //     this.idSolicitacaoAlteracaoDiaria
  //   )
  //   .toPromise();
  // promise
  //   .then(() => {
  //     this.mensagemService.mensagemSucesso('Arquivo enviado com sucesso.');
  //     this.arquivoIncluidoEmitter.emit();
  //     this.modalService.dismissAll();
  //     this.fileinput.clear();
  //     this.onClear();
  //   })
  //   .catch((error) => {
  //     this.mensagemService.mensagemErrorInfo(
  //       error,
  //       'Houve algum problema ao carregar os arquivos.'
  //     );
  //   });
  // }

  // onClear(): void {
  // this.showFormIncluirArquivo = false;
  // this.uploadedFiles = [];
  // this.showFormIncluirArquivo = true;
  // this.modalService.dismissAll();
  // }

  // openModal() {
  // this.modalService
  //   .open(content, { backdrop: 'static', keyboard: false })
  //   .result.then(() => {});
  // }

  // private setDescricaoArquivo() {
  // if (event.files.length > 0) {
  //   for (const file of event.files) {
  //     this.descricao =
  //       file.name.substr(0, file.name.lastIndexOf('.')) || file.name;
  //   }
  // }
  // }
}
