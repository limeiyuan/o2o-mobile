import { Component } from '@angular/core';
import {NavController, IonicPage,Platform, ActionSheetController} from 'ionic-angular';
import {settingService} from "../../../providers/setting-service-rest";
import { Camera, CameraOptions } from '@ionic-native/camera';

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
      title: '',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            // this.getPhoto();
            console.log('拍照 clicked');
          }
        }, {
          text: '相册',
          handler: () => {
            // this.getImage();
            console.log('相册 clicked');
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消 clicked');
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
