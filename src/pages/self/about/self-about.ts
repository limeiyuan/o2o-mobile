import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfAbout'
})
@Component({
  selector: 'page-self-about',
  templateUrl: './self-about.html'
})
export class SelfAboutPage {

  constructor(public navCtrl: NavController) {

  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
