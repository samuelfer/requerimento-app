import { Configuracao } from './../../model/configuracao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private apiUrl = `${environment.URL_API}/arquivos`;

  constructor(private http: HttpClient) {}

  create(file: any): Observable<any> {
    console.log('Cheguei ', file.files[0]);
    const formData: FormData = new FormData();
    formData.append('file', file.files[0]);

    console.log(formData);
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  downloadArquivo(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/download/VNvAMX4m-imagem_de_onibus.jpg`,
      {
        responseType: 'blob',
      }
    );
  }
}
