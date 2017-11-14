import {Component} from '@angular/core';
import {App, IonicPage, NavController, ModalController} from 'ionic-angular';
import {settingService} from "../../../providers/setting-service-rest";

@IonicPage({
  segment: 'selfIndex'
})
@Component({
  selector: 'page-self-index',
  templateUrl: './self-index.html'
})
export class SelfIndexPage {
  username : string = '点击登录';
  constructor(public appCtrl: App, public navCtrl: NavController,  public service: settingService, public modalCtrl: ModalController) {
    this.queryData();
  }
  queryData() {
    this.service.queryData()
      .then(data => {
        console.log(data);
        this.username = data.result.username;
      })
      .catch(error => console.log(error));
  }
  directToLogin() {
    if(this.username == '点击登录'){
      let modal = this.modalCtrl.create('AccountPage');
      modal.present();
    }else{
    }
  }
  directToSetting() {
    if(this.username == '点击登录'){
      let modal = this.modalCtrl.create('AccountPage');
      modal.present();
    }else{
      this.appCtrl.getRootNav().push('SelfSettingPage');
    }
  }

  directToFavor() {
    if(this.username == '点击登录'){
      let modal = this.modalCtrl.create('AccountPage');
      modal.present();
    }else{
      this.appCtrl.getRootNav().push('SelfFavorPage');
    }
  }

  directToMyNews() {
    if(this.username == '点击登录'){
      let modal = this.modalCtrl.create('AccountPage');
      modal.present();
    }else{
      this.appCtrl.getRootNav().push('SelfMyNewsPage');
    }
  }

  directToMyDesign() {
    if(this.username == '点击登录'){
      let modal = this.modalCtrl.create('AccountPage');
      modal.present();
    }else{
      this.appCtrl.getRootNav().push('SelfMyDesignPage');
    }
  }
  directToMyApply(){
    if(this.username == '点击登录'){
      let modal = this.modalCtrl.create('AccountPage');
      modal.present();
    }else{
      this.appCtrl.getRootNav().push('SelfMyApplyPage');
    }
  }
  directToAbout(){
    if(this.username == '点击登录'){
      let modal = this.modalCtrl.create('AccountPage');
      modal.present();
    }else{
      this.appCtrl.getRootNav().push('SelfAboutPage');
    }
  }

}
