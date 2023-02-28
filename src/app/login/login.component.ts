import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';
import { Credenciais } from '../shared/model/credenciais.model';
import { MensagemService } from './../service/mensagemService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credenciais: Credenciais = {
    username: '',
    senha: '',
  };

  constructor(
    private router: Router,
    private mensagemService: MensagemService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.validaCampos()) {
      this.authService.login(this.credenciais).subscribe(
        (response) => {
          this.authService.successLogin(
            response.headers.get('Authorization').substring(7)
          );
          this.router.navigate(['dashboard']);
        },
        (error) => {
          this.mensagemService.mensagemError(
            error,
            'Usuário e/ou senha inválidos!'
          );
        }
      );
    }
  }

  private validaCampos(): boolean {
    if (
      this.credenciais.username === undefined ||
      this.credenciais.username === ''
    ) {
      this.mensagemService.mensagemAlerta('Por favor, informe o email');
      return false;
    }

    if (this.credenciais.senha === undefined || this.credenciais.senha === '') {
      this.mensagemService.mensagemAlerta('Por favor, informe a senha');
      return false;
    }
    return true;
  }
}
