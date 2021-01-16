import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historico } from './historico.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  apiUrl = 'https://combustivelapp.herokuapp.com/api/historico';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  read(): Observable<Historico[]> {
    return this.http.get<Historico[]>(this.apiUrl)
  }

}
