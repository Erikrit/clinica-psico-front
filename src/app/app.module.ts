import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { ListaEstagiarioComponent } from './lista-estagiario/lista-estagiario.component';
import { CadastroEstagiarioComponent } from './lista-estagiario/cadastro-estagiario/cadastro-estagiario.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    ListaEstagiarioComponent,
    CadastroEstagiarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
