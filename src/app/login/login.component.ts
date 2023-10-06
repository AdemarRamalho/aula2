import { Component, Inject, inject} from '@angular/core';
import { Usuario } from './usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {

  usuario!: Usuario;

  roteador = inject(Router);

  constructor(){
    this.usuario = new Usuario("","");
  }
  

  logar(){
    if(this.usuario.login == 'admin' && this.usuario.senha == "admin"){
      console.log(this.roteador.navigate(['admin/pessoas']));

    }else{
      alert('usuario ou senha incorretos')
    }
  }
}
