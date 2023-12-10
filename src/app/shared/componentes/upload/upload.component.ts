import { MensagemService } from 'src/app/service/mensagemService';
import { UploadService } from './upload.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import {
  DomSanitizer
} from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  @Output() arquivoIncluidoEmitter = new EventEmitter(); // emite informacao depois do upload

  uploadedFiles: any;
  urlFotoInsegura: any;
  urlFoto: any;
  @Input()
  tipoArquivo: string;

  @ViewChild('file') file: FileUpload;

  constructor(
    private uploadService: UploadService,
    private mensagemService: MensagemService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  validateFile(file: File): boolean {
    let isValidFile = true;
    if (file.size === 0) {
      this.mensagemService.mensagemAlerta(
        'Não é possível enviar um arquivo com tamanho zero.'
      );
      isValidFile = false;
    }

    return isValidFile;
  }

  upload(event: any, tipoArquivo: string) {
    this.onUpload(event, tipoArquivo);
  }

  onUpload(event: any, tipoArquivo: string): void {
    this.uploadService.create(this.file, tipoArquivo).subscribe(
      (response) => {
        this.mensagemService.mensagemSucesso('Arquivo enviado com sucesso.');
        this.arquivoIncluidoEmitter.emit();
        this.file.clear();
        this.onClear();
        this.getArquivo(response.fileName);
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Houve algum problema ao tentar salvar o arquivo.'
        );
      }
    );
  }

  onClear(): void {
    this.uploadedFiles = [];
  }

  public getArquivo(fileName: string): void {
    this.uploadService.downloadArquivo(fileName).subscribe(
      (data) => {
        this.createImageFromBlob(data);
      },
      (error) => {
        this.mensagemService.mensagemError(
          error,
          'Houve algum problema ao tentar recuperar o arquivo.'
        );
      }
    );
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        if (reader.result === 'data:') {
          this.urlFoto = null;
        } else {
          this.urlFotoInsegura = reader.result;
          this.trataUrlFoto(this.urlFotoInsegura);
        }
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  private trataUrlFoto(dataUrl: string) {
    this.urlFoto = this.sanitizer.bypassSecurityTrustUrl(dataUrl);
  }
}
