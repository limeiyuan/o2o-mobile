import { Component } from '@angular/core';
import {NavController, IonicPage, NavParams, ModalController} from 'ionic-angular';
import {settingService} from "../../../providers/setting-service-rest";
import { ToastController } from 'ionic-angular';


@IonicPage({
  segment:'selfChangeEmail'
})
@Component({
  selector: 'page-self-changeEmail',
  templateUrl: './self-changeEmail.html'
})
export class SelfChangeEmailPage {
  email : string ='';
  transmitEmail : string ='';
  callback;
  constructor(public navCtrl: NavController,  public modalCtrl: ModalController,  public service: settingService, public NavParams: NavParams, public toastCtrl: ToastController) {
    this.transmitEmail= NavParams.get('email');
    this.callback= NavParams.get('callback');
    this.email = this.transmitEmail;
  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
  // 设置邮箱
  save() {
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(this.email == ''){
      this.presentToast('请输入邮箱');
      return false;
    }else if(!reg.test(this.email)){
      this.presentToast("请输入正确的邮箱");
      return false;
    }
    this.service.settingData(undefined, undefined, this.email, undefined)
      .then(data => {
        console.log(data);
        if(data.success == true){
          this.presentToast("邮箱修改成功");
          this.callback(this.email).then(()=>{
            this.navCtrl.pop();
          });
        }
      })
      .catch(error => console.log(error));
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }
  clearText(){
    this.email = '';
  }
}
