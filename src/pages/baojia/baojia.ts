import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {DesignerService} from "../../providers/designer-service-rest";

/**
 * Generated class for the BaojiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baojia',
  templateUrl: 'baojia.html',
})
export class BaojiaPage {
  username: string = '';
  phone: string = '';
  address: string = '北京';
  style: string = '';
  gender: string = '先生';
  designerId : Number;
  stringGender : string = 'MALE';

  constructor(public navCtrl: NavController, public service: DesignerService, public navParams: NavParams, public alerCtrl: AlertController) {
    this.designerId = navParams.get('id');
    console.log(this.designerId);
  }
  backListPage(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
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
    if(this.designerId == undefined){
      this.service.makeAppointment(this.style, this.phone, this.address, this.username, this.stringGender)
        .then(data => {
          console.log(data);
          if(data.success == true){
            this.doAlert("预约成功");
            this.navCtrl.pop();
          }
        })
        .catch(error => console.log(error));
    }else{
      this.service.makeAppointmentDesigner(this.style, this.designerId, this.phone, this.address, this.username, this.stringGender)
        .then(data => {
          console.log(data);
          if(data.success == true){
            this.doAlert("预约成功");
            this.navCtrl.pop();
          }
        })
        .catch(error => console.log(error));
    }
  }
  doAlert(Msg) {
    let alert = this.alerCtrl.create({
      message: Msg,
      buttons: ['好的']
    });
    alert.present()
  }
  changeGender(stringGender, gender){
    this.stringGender = stringGender;
    this.gender = gender;
  }
}
