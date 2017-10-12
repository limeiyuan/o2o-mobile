import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfChangeEmail'
})
@Component({
  selector: 'page-self-changeEmail',
  templateUrl: './self-changeEmail.html'
})
export class SelfChangeEmailPage {

  constructor(public navCtrl: NavController) {

  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
