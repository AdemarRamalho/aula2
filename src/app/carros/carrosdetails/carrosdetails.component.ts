import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {
  roteador = inject(ActivatedRoute);
  carro:Carro = new Carro("",0,0);
  @Output() retorno = new EventEmitter<Carro>()

  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvar(){
    this.retorno.emit(this.carro);
  }
}
