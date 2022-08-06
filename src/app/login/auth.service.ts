import { Observable } from 'rxjs';
import { Credenciais } from '../shared/model/credenciais.interface';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.URL_API}/login`;

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
}
