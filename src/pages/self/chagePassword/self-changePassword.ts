import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfChangePassword'
})
@Component({
  selector: 'page-self-changePassword',
  templateUrl: './self-changePassword.html'
})
export class SelfChangePasswordPage {
  constructor(public navCtrl: NavController) {
  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
