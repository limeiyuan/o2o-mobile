import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {settingService} from "../../../providers/setting-service-rest";


@IonicPage({
  segment:'selfChangePassword'
})
@Component({
  selector: 'page-self-changePassword',
  templateUrl: './self-changePassword.html'
})
export class SelfChangePasswordPage {
  oldPassword : string = '';
  newPassword : string = '';
  surePassword : string = '';
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,  public service: settingService) {
  }
  directToSetting(){
    this.navCtrl.push('SelfSettingPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
  save(){
    let passwordReg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/ig;
    if(this.oldPassword == ''){
      this.presentToast('请输入旧密码');
      return false;
    }else if(!passwordReg.test(this.oldPassword)){
      this.presentToast("密码为6-12位字母数字结合");
      return false;
    }
    if(this.newPassword == ''){
      this.presentToast('请输入新密码');
      return false;
    }
    // else if(!passwordReg.test(this.newPassword)){
    //   this.presentToast("新密码为6-12位字母数字结合");
    //   return false;
    // }
    if(this.surePassword == ''){
      this.presentToast('请输入确认密码');
      return false;
    }
    if(this.surePassword !== this.newPassword){
      this.presentToast("两次密码输入不一致");
      return false;
    }
    this.service.changePassword(this.oldPassword, this.newPassword)
      .then(data => {
        console.log(data);
        if(data.message == "旧密码与新密码不能相同"){
            this.presentToast("旧密码与新密码不能相同");
            return false;
        }else if(data.message == "旧密码不正确"){
          this.presentToast("旧密码不正确");
          return false;
        }else if(data.message == '当前没有用户登录'){
          this.presentToast("当前用户未登录");
          return false;
        }
        if(data.success == true){
          this.presentToast("密码修改成功");
          this.navCtrl.pop();
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
