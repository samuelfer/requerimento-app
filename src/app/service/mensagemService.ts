import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MensagemService {
  constructor(private toastr: ToastrService) {}

  mensagemSucesso(detail: any) {
    this.toastr.success(detail);
  }

  mensagemError(error: any, detail: any) {
    if (error.status == 401 || error.status == 403) {
      console.log('Aqui no error 401');
      this.toastr.error('Permissão de acesso negada.');
    }

    if (error.error.errors) {
      console.log('Aqui no error');
      error.error.errors.forEach((element: { message: string | undefined }) => {
        this.toastr.error(element.message);
      });
    } else if (error.error.message) {
      console.log('Aqui no error2');
      this.toastr.error(error.error.message);
    } else {
      console.log('Aqui no error3');
      this.toastr.error(detail);
    }
  }

  mensagemAlerta(detail: any) {
    this.toastr.warning(detail);
  }
}
