import { Component, OnInit } from '@angular/core';
import { Estagiario } from '../../model/estagiario.model';

@Component({
  selector: 'app-cadastro-estagiario',
  templateUrl: './cadastro-estagiario.component.html',
  styleUrls: ['./cadastro-estagiario.component.css']
})
export class CadastroEstagiarioComponent implements OnInit {
 
  public estagiario:Estagiario = new Estagiario();
 
  constructor() { }

  ngOnInit() {
  }

  setMatricula(event: any): void {
    this.estagiario.matricula = event.target.value;
  }

  setNomeCompleto(event: any): void {
    this.estagiario.nomeCompleto = event.target.value;
  }

  setTelefone(event: any): void {
    this.estagiario.telefoneResidencial = event.target.value;
  }

  setCelular(event: any): void {
    this.estagiario.celular = event.target.value;
  }

  setEmail(event: any): void {
    this.estagiario.email= event.target.value;
  }

  setPeriodo(event: any): void {
    this.estagiario.periodo = +event.target.value;
  }

  setTipoEstagio(event:any): void {
    this.estagiario.tipoEstagio = event.target.value;
  }
  
  setTurno(event: any): void {
    this.estagiario.turno = event.target.value;
  }

}
