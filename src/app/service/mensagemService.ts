import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MensagemService {
  constructor(private toastr: ToastrService) {}

  mensagemSucesso(detail: any) {
    this.toastr.success(detail);
  }

  mensagemError(error: any, detail: any) {
    if (error.status == 0) {
      this.toastr.error('Erro de conexão com o sistema.');
      return;
    }

    if (error.status == 401 || error.status == 403) {
      this.toastr.error('Permissão de acesso negada.');
      return;
    }

    if (error.error.errors) {
      error.error.errors.forEach((element: { message: string | undefined }) => {
        this.toastr.error(element.message);
      });
    } else if (error.error.message) {
      this.toastr.error(error.error.message);
    } else {
      this.toastr.error(detail);
    }
  }

  mensagemAlerta(detail: any) {
    this.toastr.warning(detail);
  }
}
