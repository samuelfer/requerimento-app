import { UsuarioAccessToken } from './../shared/model/user-access-token';
import { Observable, BehaviorSubject } from 'rxjs';
import { Credenciais } from '../shared/model/credenciais.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.URL_API}/login`;
  private _isLogado$ = new BehaviorSubject<boolean>(false);
  isLogado$ = this._isLogado$.asObservable();

  jwtService: JwtHelperService = new JwtHelperService();
  user: UsuarioAccessToken | undefined;

  constructor(private http: HttpClient) {
    this._isLogado$.next(!!this.isAuthenticated());
    this.user = this.getUser(this.getToken());
  }

  login(credenciais: Credenciais): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credenciais, {
      observe: 'response',
      responseType: 'text',
    });
  }

  successLogin(token: string): void {
    localStorage.setItem('token', token);
    const listRoles = this.getPermissions(token);

    this._isLogado$.next(true);
    this.user = this.getUser(token);
  }

  isAuthenticated() {
    if (this.getToken() !== null) {
      return !this.jwtService.isTokenExpired(this.getToken());
    }
    return false;
  }

  logout() {
    localStorage.clear();
  }

  private getToken(): any {
    return localStorage.getItem('token');
  }

  private getUser(token: string): UsuarioAccessToken | undefined {
    if (token) {
      return JSON.parse(atob(token.split('.')[1])) as UsuarioAccessToken;
    }
    return undefined;
  }

  private getPermissions(token: string) {
    return this.getUser(token)?.authorities;
  }

  hasPermission(perfis: string[]): boolean {
    let isAutorizado = false;
    for (const perfil of this.user!.authorities) {
      if (perfis.includes(perfil)) {
        return (isAutorizado = true);
      }
    }
    return isAutorizado;
  }
}
