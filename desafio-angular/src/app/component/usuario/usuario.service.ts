import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Usuario} from './Usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = 'https://combustivelapp.herokuapp.com/api/usuarios';

  constructor(private http: HttpClient) { }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.apiUrl, usuario)
  }



}
