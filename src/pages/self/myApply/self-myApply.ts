import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'SelfMyApply'
})
@Component({
  selector: 'page-self-MyApply',
  templateUrl: './self-MyApply.html'
})
export class SelfMyApplyPage {
  viewMode: string = "finish";

  constructor(public navCtrl: NavController) {

  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
