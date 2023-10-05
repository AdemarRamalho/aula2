import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa [] = [];
  
    constructor(){
      this.lista.push(new Pessoa("Ademar", 23));
      this.lista.push(new Pessoa("Ademar", 22));
      this.lista.push(new Pessoa("Ademar", 21));
      this.lista.push(new Pessoa("Ademar", 24));
      this.lista.push(new Pessoa("Ademar", 27));
      this.lista.push(new Pessoa("Ademar", 29));
      this.lista.push(new Pessoa("Ademar", 20));
    }
}
