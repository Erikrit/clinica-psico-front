import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Estagiario } from '../../model/estagiario.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EstagiarioService } from '../../service/estagiario.service';

@Component({
  selector: 'app-cadastro-estagiario',
  templateUrl: './cadastro-estagiario.component.html',
  styleUrls: ['./cadastro-estagiario.component.css']
})
export class CadastroEstagiarioComponent implements OnInit {

  public estagiario: Estagiario = new Estagiario();
  
  constructor( private estagiarioService: EstagiarioService ) {

  }

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
    this.estagiario.email = event.target.value;
  }

  setPeriodo(event: any): void {
    this.estagiario.periodo = +event.target.value;
  }

  setTipoEstagio(event: any): void {
    this.estagiario.tipoEstagio = event.target.value;
  }

  setTurno(event: any): void {
    this.estagiario.turno = event.target.value;
  }

  gravarEstagiario(): void {
    this.estagiarioService.gravarEstagiario(this.estagiario)
      .subscribe(estagiario => {
        console.log('gravado com sucesso');
      });
  }

}
