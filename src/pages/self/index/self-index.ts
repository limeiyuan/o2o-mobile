import {Component} from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';

@IonicPage({
  segment: 'selfIndex'
})
@Component({
  selector: 'page-self-index',
  templateUrl: './self-index.html'
})
export class SelfIndexPage {

  constructor(public appCtrl: App, public navCtrl: NavController) {

  }

  directToSetting() {
    this.appCtrl.getRootNav().push('SelfSettingPage');
  }

  directToFavor() {
    this.appCtrl.getRootNav().push('SelfFavorPage');
  }

  directToMyNews() {
    this.appCtrl.getRootNav().push('SelfMyNewsPage');
  }

  directToMyDesign() {
    this.appCtrl.getRootNav().push('SelfMyDesignPage');
  }
}
