import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfChangeNickname'
})
@Component({
  selector: 'page-self-changeNickname',
  templateUrl: './self-changeNickname.html'
})
export class SelfChangeNicknamePage {

  constructor(public navCtrl: NavController) {

  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
