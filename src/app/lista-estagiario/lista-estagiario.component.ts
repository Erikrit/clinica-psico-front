import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-estagiario',
  templateUrl: './lista-estagiario.component.html',
  styleUrls: ['./lista-estagiario.component.css']
})
export class ListaEstagiarioComponent implements OnInit {
  public monitorLink: string = 'cadastro';
  constructor() { }

  ngOnInit() {
  }

}
