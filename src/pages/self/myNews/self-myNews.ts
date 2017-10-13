import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfMyNews'
})
@Component({
  selector: 'page-self-MyNews',
  templateUrl: './self-MyNews.html'
})
export class SelfMyNewsPage {

  constructor(public navCtrl: NavController) {

  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
