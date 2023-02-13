import { MensagemService } from './../service/mensagemService';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private mensagemService: MensagemService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isAutorizado = false;
    if (this.authService.user) {
      isAutorizado = this.authService.user.authorities.includes(
        route.data.roles
      );
    }

    if (!isAutorizado) {
      this.router.navigate(['dashboard']);
      this.mensagemService.mensagemAlerta(
        'Você não tem permissão para acessar essa funcionalidade!'
      );
    }
    return isAutorizado;
  }
}
