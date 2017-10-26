import { Component } from '@angular/core';
import {NavController, IonicPage,Platform, ActionSheetController} from 'ionic-angular';
import {settingService} from "../../../providers/setting-service-rest";

@IonicPage({
  segment:'selfEditData'
})
@Component({
  selector: 'page-self-editData',
  templateUrl: './self-editData.html'
})
export class SelfEditDataPage {
  editData : object;
  constructor(public navCtrl: NavController, public platform: Platform,public actionsheetCtrl: ActionSheetController, public service: settingService) {
   this.queryData();
  }
  directToChangeEmail(){
    this.navCtrl.push('SelfChangeEmailPage');
  }
  directToChangeNickname(nickname){
    this.navCtrl.push('SelfChangeNicknamePage',{nickname: nickname});
  }
  directToChangeGender(){
    this.navCtrl.push('SelfGenderPage');
  }
  directToChangePassword(){
    this.navCtrl.push('SelfChangePasswordPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
  changePortrait() {
    // debugger;
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '拍照',
          // role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: '从相册中选择',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },

        {
          text: '取消',
          // role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  // 回显资料
  queryData() {
    this.service.queryData()
      .then(data => {
        console.log(data);
        this.editData = data.result;
      })
      .catch(error => console.log(error));
  }
}
