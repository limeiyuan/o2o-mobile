import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LookpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'lookpassword'
})
@Component({
  selector: 'page-lookpassword',
  templateUrl: 'lookpassword.html',
})
export class LookpasswordPage {
  phone: string = '';
  code: string = '';
  newPassword: string = '';
  surePassword: string = '';
  public tips = '获取验证码';
  public disabled = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LookpasswordPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
  // 获取验证码
  getCode(event: any) {
    let number = 60;
    this.disabled = true;
    const that = this;
    that.tips = number + 's';

    const timer = setInterval(function () {
      number --;
      if (number === 0) {
        that.disabled = false;
        that.tips = '获取验证码';
        clearInterval(timer);
      } else {
        that.tips = number + 's';
      }
    }, 1000);
  }
  finish(){
    let phoneReg = /^(13|14|15|17|18)[0-9]{9}$/;
    let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/ig;

    if(this.phone == ''){
      this.presentToast('请输入手机号');
      return false;
    }else if(!phoneReg.test(this.phone)){
      this.presentToast("请输入正确的手机号");
      return false;
    }
    if(this.code == ''){
      this.presentToast('请输入验证码');
      return false;
    }
    if(this.newPassword == ''){
      this.presentToast('请输入密码');
      return false;
    }else if(!passwordReg.test(this.newPassword)){
      this.presentToast("密码为6-12位字母数字结合");
      return false;
    }
    if(this.surePassword == ''){
      this.presentToast('请确认密码');
      return false;
    }else if(!passwordReg.test(this.surePassword)){
      this.presentToast("密码为6-12位字母数字结合");
      return false;
    }
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}
