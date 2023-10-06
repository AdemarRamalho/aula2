import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
    lista: Carro[] = [];
    modalService = inject(NgbModal)

    constructor(){
      this.lista.push(new Carro("Fusion",2023));
      this.lista.push(new Carro("Ferrari",2023));
      this.lista.push(new Carro("X6",2023));
      this.lista.push(new Carro("CLA200",2023));
      this.lista.push(new Carro("Civic",2023));
      this.lista.push(new Carro("Uno",2023));
      this.lista.push(new Carro("Marea",2023));
    }
    abriModal(abrir :any){
      this.modalService.open(abrir,{size:'lg'});
    }

    addNaLista(carro:Carro){
      this.lista.push(carro);
      this.modalService.dismissAll();
    }
}
