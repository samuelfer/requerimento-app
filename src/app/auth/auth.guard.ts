import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let authenticated = this.authService.isAuthenticated();

    if (authenticated) {
      return true;
    } else {
      this.toastr.error('Token expirado!', 'Por favor, faça o login novamente');
      this.router.navigate(['login']);
      return false;
    }
  }
}
