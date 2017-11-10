import { Component } from '@angular/core';
import {NavController, IonicPage, NavParams} from 'ionic-angular';
import {settingService} from "../../../providers/setting-service-rest";
import { ToastController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public NavParams: NavParams, public toastCtrl: ToastController, public service: settingService) {
    this.transmitNickname = NavParams.get('nickname');
    this.queryNickname = this.transmitNickname;
  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }

  // 设置昵称
  save() {
    this.service.settingData(this.queryNickname, undefined, undefined, undefined)
      .then(data => {
        console.log(data);
        if(data.success == true){
          this.presentToast("昵称修改成功");
          this.navCtrl.push('SelfEditDataPage');
        }
      })
      .catch(error => console.log(error));
  }
  clearText(){
    this.queryNickname = '';
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }
}
