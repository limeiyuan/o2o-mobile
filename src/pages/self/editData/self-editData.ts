import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfEditData'
})
@Component({
  selector: 'page-self-editData',
  templateUrl: './self-editData.html'
})
export class SelfEditDataPage {

  constructor(public navCtrl: NavController) {
  }
  directToChangeEmail(){
    this.navCtrl.push('SelfChangeEmailPage');
  }
  directToChangeNickname(){
    this.navCtrl.push('SelfChangeNicknamePage');
  }
  directToChangeGender(){
    this.navCtrl.push('SelfGenderPage');
  }
  directToChangePassword(){
    this.navCtrl.push('selfChangePassword');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
