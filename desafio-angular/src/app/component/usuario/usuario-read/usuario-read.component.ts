import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuario: Usuario = {
    id: '',
    email: '',
    login: '',
    nome: '',
    senha: ''
  }
  
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe((usuarios) => {
      this.usuarios = usuarios
      console.log(this.usuarios);
    }) 
  }

  deleteUsuario(): void{
    this.usuarioService.delete(this.usuario).subscribe(() => {
      this.router.navigate(['/usuarios'])
    })
    
  }

}
