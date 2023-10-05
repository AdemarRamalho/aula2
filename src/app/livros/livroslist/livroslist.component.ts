import { Component } from '@angular/core';
import { Livro } from '../livro';


@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro[] = [];

  constructor(){
    this.lista.push(new Livro ("titulo1","autor1"));
    this.lista.push(new Livro ("titulo2","autor2"));
    this.lista.push(new Livro ("titulo3","autor3"));
    this.lista.push(new Livro ("titulo4","autor4"));
    this.lista.push(new Livro ("titulo5","autor5"));
    this.lista.push(new Livro ("titulo6","autor6"));
    this.lista.push(new Livro ("titulo7","autor7"));
  }
}
