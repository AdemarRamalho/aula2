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
    carroEmEdicao:any | null =null;
    editMode:boolean[] = [];
    modalService = inject(NgbModal);
    

    constructor(){
      this.lista.push(new Carro("Fusion",2023,1));
      this.lista.push(new Carro("Ferrari",2023,2));
      this.lista.push(new Carro("X6",2023,3));
      this.lista.push(new Carro("CLA200",2023,4));
      this.lista.push(new Carro("Civic",2023,5));
      this.lista.push(new Carro("Uno",2023,6));
      this.lista.push(new Carro("Marea",2023,7));
      this.editMode = new Array(this.lista.length).fill(false);
    }
    abriModal(abrir :any){
      this.modalService.open(abrir,{size:'lg'});
    }

    addNaLista(carro:Carro){
      this.lista.push(carro);
      this.modalService.dismissAll();
    }

    editarItem(index:number ) {
      this.carroEmEdicao = {...this.lista[index] };
      this.editMode[index] = true;
    }
    salvarEdicao(index:number) {
      this.lista[index] = { ...this.carroEmEdicao };
      this.editMode[index] = false;
      this.carroEmEdicao = null;
    }
    cancelarEdicao(index: number) {
      this.editMode[index] = false;
      this.carroEmEdicao = null;
    }

}
