import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from './../shared/model/credenciais.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credenciais: Credenciais = {
    email: '',
    senha: '',
  };

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }

  login() {
    this.authService.login(this.credenciais).subscribe(
      (response) => {
        this.authService.successLogin(
          response.headers.get('Authorization').substring(7)
        );
      },
      () => {
        this.toastr.error('Usuário e/ou senha inválidos!', 'Login');
      }
    );
  }
}
