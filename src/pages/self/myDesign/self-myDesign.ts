import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfMyDesign'
})
@Component({
  selector: 'page-self-myDesign',
  templateUrl: './self-myDesign.html'
})
export class SelfMyDesignPage {

  constructor(public navCtrl: NavController) {

  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
