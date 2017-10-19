import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the YanfangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment: 'yanfang'
  }
)
@Component({
  selector: 'page-yanfang',
  templateUrl: 'yanfang.html',
})
export class YanfangPage {
  username: string = '';
  phone: string = '';
  address: string = '';
  houseNum: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }
  backListPage(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad YanfangPage');
  }
  directToSubmit(){
    let phoneReg = /^(13|14|15|17|18)[0-9]{9}$/;
    if(this.username == ''){
      this.doAlert('请输入姓名');
      return false;
    }
    if(this.phone == ''){
      this.doAlert('请输入手机号');
      return false;
    }else if(!phoneReg.test(this.phone)){
      this.doAlert("请输入正确的手机号");
      return false;
    }
    if(this.address == ''){
      this.doAlert('请输入小区号');
      return false;
    }
    if(this.houseNum == ''){
      this.doAlert('请输入房间号');
      return false;
    }
  }
  doAlert(Msg) {
    let alert = this.alerCtrl.create({
      message: Msg,
      buttons: ['好的']
    });
    alert.present()
  }
}
