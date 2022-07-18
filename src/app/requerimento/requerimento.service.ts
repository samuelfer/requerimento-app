import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequerimentoService {
  private apiUrl = `${environment.URL_API}/requerimentos`;

  constructor(private http: HttpClient) {}

  listarRequerimentos(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
