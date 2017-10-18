import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfSetting'
})
@Component({
  selector: 'page-self-setting',
  templateUrl: './self-setting.html'
})
export class SelfSettingPage {

  constructor(public navCtrl: NavController,) {

  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }

}
