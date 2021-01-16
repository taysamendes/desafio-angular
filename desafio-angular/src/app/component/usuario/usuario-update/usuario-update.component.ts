import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario: Usuario = {
    email: '',
    login: '',
    nome: '',
    senha: ''
  }

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router, 
    private route:ActivatedRoute
    
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.usuarioService.readById(id).subscribe((usuario) => {
      this.usuario = usuario
    });
  }


  updateUsuario(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      this.router.navigate(['/usuarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/usuarios'])
  }

}
