import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './livros/livrosdetails/livrosdetails.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    PessoaslistComponent,
    PessoasdetailsComponent,
    LivroslistComponent,
    LivrosdetailsComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
