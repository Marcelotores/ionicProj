import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecoundPage } from '../secound/secound';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos: Array<Object> = [];

  constructor(public nav: NavController) {

    this.produtos = [
      {
        "nome": "Produto1",
        "preco": "33,90"
      },
      {
        "nome": "Produto2",
        "preco": "45,90"
      },
      {
        "nome": "Produto3",
        "preco": "17,90"
      }
    ]
    
  }

  par() {
    this.nav.push(SecoundPage, {produtos: this.produtos});
  }

}
