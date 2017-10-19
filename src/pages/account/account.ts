import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { accountService } from "../../providers/account-service-rest";


@IonicPage({
  segment: 'account'
})
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  providers: [
    accountService
  ]
})
export class AccountPage {
  viewMode: string = 'login';
  role : string = '普通用户';
  login: {username: string, password: string} = {username: '', password: ''};
  register: {username: string, password: string, code: string} = {username: '', password: '', code:''};
  public tips = '获取验证码';
  public disabled = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public service: accountService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  directTo (target) {
    this.viewMode = target
  }
  directToLookpassword(){
    this.navCtrl.push('LookpasswordPage');
  }
  // 获取验证码
  getCode(event: any) {
    let number = 60;
    this.disabled = true;
    const that = this;
    that.tips = number + 's';
    this.service.sendCode(this.register.username)
      .then(data => {
        console.log(data.result.length);
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
  // 登录
  directToLogin(){
    if(this.login.username == ''){
      this.presentToast('请输入用户名');
      return false;
    }
    if(this.login.password == ''){
      this.presentToast('请输入密码');
      return false;
    }
  }
  // 注册
  directToRegister(){
    let phoneReg = /^(13|14|15|17|18)[0-9]{9}$/;
    let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/ig;

    if(this.register.username == ''){
      this.presentToast('请输入用户名');
      return false;
    }else if(!phoneReg.test(this.register.username)){
      this.presentToast("请输入正确的手机号");
      return false;
    }
    if(this.register.code == ''){
      this.presentToast('请输入验证码');
      return false;
    }
    if(this.register.password == ''){
      this.presentToast('请输入密码');
      return false;
    }else if(!passwordReg.test(this.register.password)){
      this.presentToast("密码为6-12位字母数字结合");
      return false;
    }
    this.service.doRegister(this.register.username, this.register.password, this.register.code)
      .then(data => {
       console.log(data);
      })
      .catch(error => alert(JSON.stringify(error)));
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  changeRole(eng, role){
    this.role = role;
  }
}
