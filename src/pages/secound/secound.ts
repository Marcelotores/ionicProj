import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secound',
  templateUrl: 'secound.html',
})
export class SecoundPage {
  produtos: Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produtos = navParams.get('produtos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecoundPage');
  }

}
