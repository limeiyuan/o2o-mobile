import { Component } from '@angular/core';
import {NavController, IonicPage, ModalController} from 'ionic-angular';

@IonicPage({
  segment:'selfSetting'
})
@Component({
  selector: 'page-self-setting',
  templateUrl: './self-setting.html'
})
export class SelfSettingPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
  logOut() {
    let modal = this.modalCtrl.create('AccountPage');
    modal.present();
  }
}
