import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Usuario} from './usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = 'https://combustivelapp.herokuapp.com/api/usuarios';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  create(usuario: Usuario): Observable <Usuario>{
    return this.http.post<Usuario>(this.apiUrl, usuario)
  }

  read(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl)
  }

  readById(id: any): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Usuario>(url)
  }

  update(usuario: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/${usuario.id}`
    return this.http.put<Usuario>(url, usuario)
  }

  delete(id: any): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Usuario>(url)
  }
}
