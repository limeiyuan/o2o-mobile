import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfDesignEdit'
})
@Component({
  selector: 'page-self-designEdit',
  templateUrl: './self-designEdit.html'
})
export class SelfDesignEditPage {

  constructor(public navCtrl: NavController) {

  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
