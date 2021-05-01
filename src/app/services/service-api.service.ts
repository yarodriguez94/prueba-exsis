import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceApiService {
  url: string = 'https://cms.qailumno.com/servicios/noticias';
  noticia: any;

  constructor(private http: HttpClient) {

  }

  getData():Observable<any> {
    return this.http.get(this.url);
  }
  
}
