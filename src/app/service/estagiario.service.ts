import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estagiario } from '../model/estagiario.model';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class EstagiarioService {

  private url: string = 'http://localhost:8080/api/estagiario'
  

  constructor(
    private httpClient: HttpClient
  ) { }

  gravarEstagiario(estagiario: Estagiario): Observable<string> {
    console.log('Estagiario: ', estagiario);
    return this.httpClient.post<string>(this.url, estagiario);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }

}
