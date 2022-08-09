import { Observable } from 'rxjs';
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

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(credenciais: Credenciais): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credenciais, {
      observe: 'response',
      responseType: 'text',
    });
  }

  successLogin(token: string): void {
    localStorage.setItem('token', token);
  }

  isAuthenticated() {
    let token = localStorage.getItem('token');
    console.log('No isAuthenticated');

    if (token !== null) {
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

  logout() {
    localStorage.clear();
  }
}
