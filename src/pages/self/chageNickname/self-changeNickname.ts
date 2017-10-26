import { Component } from '@angular/core';
import {NavController, IonicPage, NavParams} from 'ionic-angular';
import {settingService} from "../../../providers/setting-service-rest";

@IonicPage({
  segment:'selfChangeNickname'
})
@Component({
  selector: 'page-self-changeNickname',
  templateUrl: './self-changeNickname.html'
})
export class SelfChangeNicknamePage {
  editData : object;
  transmitNickname : string = '';
  queryNickname : string = '';
  nickname : string = this.queryNickname;
  constructor(public navCtrl: NavController, public NavParams: NavParams, public service: settingService) {
    this.transmitNickname = NavParams.get('nickname');
  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
  queryData() {
    this.service.queryData()
      .then(data => {
        console.log(data);
        this.queryNickname = data.result.nickname;
      })
      .catch(error => console.log(error));
  }
  // 设置昵称
  save() {
    this.service.settingData(this.nickname, undefined, undefined, undefined)
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  }
}
