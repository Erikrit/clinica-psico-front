import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { ListaEstagiarioComponent } from './lista-estagiario/lista-estagiario.component';
import { CadastroEstagiarioComponent } from './lista-estagiario/cadastro-estagiario/cadastro-estagiario.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { EstagiarioService } from './service/estagiario.service';
import { HttpClient, HttpHandler  } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    ListaEstagiarioComponent,
    CadastroEstagiarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EstagiarioService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
