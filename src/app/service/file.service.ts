import { OficioService } from './../oficio/oficio.service';
import { Oficio } from 'src/app/shared/model/oficio.model';
import { Injectable } from '@angular/core';
import { MensagemService } from './mensagemService';

@Injectable()
export class FileService {
  constructor(
    private oficioService: OficioService,
    private mensagemService: MensagemService
  ) {}

  public abrir(arquivo: Oficio) {
    if (arquivo != null) {
      this.oficioService.download(1).subscribe(
        (data) => {
          const file = this.blobToFile(data, 'teste');
          const url = window.URL.createObjectURL(file);
          window.open(url);
        },
        (error) => {
          this.mensagemService.mensagemError(
            error,
            'Ocorreu um erro ao tentar abrir o arquivo'
          );
        }
      );
    } else {
      this.mensagemService.mensagemAlerta(
        'Não há arquivo no registro selecionado.'
      );
    }
  }

  public download(arquivo: Oficio) {
    if (arquivo != null) {
      this.oficioService.download(1).subscribe(
        (data) => {
          const objUrl = window.URL.createObjectURL(data);
          const a = document.createElement('a');
          a.href = objUrl;
          a.download = 'testeDow';
          window.document.body.appendChild(a);
          a.click();
          a.remove();
        },
        (error) => {
          this.mensagemService.mensagemError(
            error,
            'Ocorreu um erro ao tentar fazer o download do arquivo'
          );
        }
      );
    } else {
      this.mensagemService.mensagemAlerta(
        'Não há arquivo no registro selecionado.'
      );
    }
  }

  public blobToFile = (blob: Blob, fileName: string): File => {
    const b: any = blob;
    b.lastModifiedDate = new Date();
    b.name = fileName;
    return <File>b;
  };
}
