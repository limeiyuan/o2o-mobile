import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfIndex'
})
@Component({
  selector: 'page-self-index',
  templateUrl: './self-index.html'
})
export class SelfIndexPage {

  constructor(public navCtrl: NavController) {

  }

}
