import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'underlineEngineering'
})
@Component({
  selector: 'page-underlineEngineering',
  templateUrl: './underlineEngineering.html'
})
export class UnderlineEngineeringPage {

  constructor(public navCtrl: NavController) {

  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
