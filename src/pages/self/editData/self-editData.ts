import { Component } from '@angular/core';
import {NavController, IonicPage,Platform, ActionSheetController} from 'ionic-angular';

@IonicPage({
  segment:'selfEditData'
})
@Component({
  selector: 'page-self-editData',
  templateUrl: './self-editData.html'
})
export class SelfEditDataPage {
  constructor(public navCtrl: NavController, public platform: Platform,public actionsheetCtrl: ActionSheetController) {
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
    // debugger;
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
}
