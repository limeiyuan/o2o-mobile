import {Component} from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';
import {settingService} from "../../../providers/setting-service-rest";

@IonicPage({
  segment: 'selfIndex'
})
@Component({
  selector: 'page-self-index',
  templateUrl: './self-index.html'
})
export class SelfIndexPage {
  username : string = '艺美家美';
  constructor(public appCtrl: App, public navCtrl: NavController,  public service: settingService) {
    this.queryData();
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
  directToMyApply(){
    this.appCtrl.getRootNav().push('SelfMyApplyPage');
  }
  directToAbout(){
    this.appCtrl.getRootNav().push('SelfAboutPage');
  }
  queryData() {
    this.service.queryData()
      .then(data => {
        console.log(data);
        this.username = data.result.username;
      })
      .catch(error => console.log(error));
  }
}
