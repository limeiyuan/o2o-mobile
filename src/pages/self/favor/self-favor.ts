import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'SelfFavor'
})
@Component({
  selector: 'page-self-favor',
  templateUrl: './self-favor.html'
})
export class SelfFavorPage {

  constructor(public navCtrl: NavController) {

  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
