import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { accountService } from "../../providers/account-service-rest";

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
  providers: [
    accountService
  ]
})
export class LookpasswordPage {
  phone: string = '';
  code: string = '';
  newPassword: string = '';
  surePassword: string = '';
  public tips = '获取验证码';
  public disabled = false;
  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public service: accountService) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LookpasswordPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
  // 获取验证码
  getCode(event: any) {
    let phoneReg = /^(13|14|15|17|18)[0-9]{9}$/;
    if(this.phone == ''){
      this.presentToast('请输入手机号');
      return false;
    }else if(!phoneReg.test(this.phone)){
      this.presentToast("请输入正确的手机号");
      return false;
    }
    let number = 60;
    this.disabled = true;
    const that = this;
    that.tips = number + 's';
    this.service.sendCode(this.phone)
      .then(data => {
        console.log(data);
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
      })
      .catch(error => alert(JSON.stringify(error)));
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
      this.presentToast('请输入新密码');
      return false;
    }
    // else if(!passwordReg.test(this.newPassword)){
    //   this.presentToast("密码为6-12位字母数字结合");
    //   return false;
    // }
    if(this.surePassword == ''){
      this.presentToast('请确认确认密码');
      return false;
    } else if(!passwordReg.test(this.surePassword)){
      this.presentToast("密码为6-12位字母数字结合");
      return false;
    }
    if(this.newPassword != this.surePassword){
      this.presentToast('两次输入密码不一致');
      return false;
    }
    this.service.forgetPassword(this.phone, this.newPassword, this.code)
      .then(data => {
        console.log(data);
        if(data.message == "该电话号码没有进行过注册"){
          this.presentToast("该电话号码未注册");
          return false;
        };
        if(data.message == "验证码已失效"){
          this.presentToast("验证码已失效");
          return false;
        };
        if(data.success == true){
          this.presentToast("密码设置成功");
          this.navCtrl.push('AccountPage');
        }
      })
      .catch(error => alert(JSON.stringify(error)));
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
