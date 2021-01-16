import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    email: '',
    login: '',
    nome: '',
    senha: ''
  }

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  createUsuario(): void {
    this.usuarioService.create(this.usuario).subscribe(()=>{
      this.router.navigate(['/usuarios'])
    })
  }
  
  cancelar(): void {
    this.router.navigate(['/usuarios'])
  }

  
}
