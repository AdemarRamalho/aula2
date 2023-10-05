import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
    lista: Carro[] = [];

    constructor(){
      this.lista.push(new Carro("Fusion",2023));
      this.lista.push(new Carro("Ferrari",2023));
      this.lista.push(new Carro("X6",2023));
      this.lista.push(new Carro("CLA200",2023));
      this.lista.push(new Carro("Civic",2023));
      this.lista.push(new Carro("Uno",2023));
      this.lista.push(new Carro("Marea",2023));
    }
}
