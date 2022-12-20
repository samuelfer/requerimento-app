import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from '../shared/model/credenciais.model';
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

  constructor(
    private router: Router,
    private toastr: ToastrService,
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
          // this.router.navigateByUrl('dashboard');
          this.router.navigate(['/']);
        },
        () => {
          this.toastr.error('Usuário e/ou senha inválidos!', 'Login');
        }
      );
    }
  }

  private validaCampos(): boolean {
    if (this.credenciais.email === undefined || this.credenciais.email === '') {
      this.toastr.error('Por favor, informe o email');
      return false;
    }

    if (this.credenciais.senha === undefined || this.credenciais.senha === '') {
      this.toastr.error('Por favor, informe a senha');
      return false;
    }
    return true;
  }
}
