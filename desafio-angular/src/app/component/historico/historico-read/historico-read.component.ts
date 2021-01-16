import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Historico } from '../historico.model';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-historico-read',
  templateUrl: './historico-read.component.html',
  styleUrls: ['./historico-read.component.css']
})
export class HistoricoReadComponent implements OnInit {

  historico: Historico= {
    id: '',
    combustivel: '',
    data:'',
    preco: ''
  }

  historicos: Historico[]

  constructor(private historicoService: HistoricoService, private router: Router ) { }

  ngOnInit(): void {
    this.historicoService.read().subscribe((historicos)=>{
      this.historicos = historicos
    })
  }

}
