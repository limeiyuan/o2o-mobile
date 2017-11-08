import { Component } from '@angular/core';
import {NavController, IonicPage, NavParams} from 'ionic-angular';
import {FormGroup, FormControl} from '@angular/forms';
import {settingService} from "../../../providers/setting-service-rest";

@IonicPage({
  segment:'selfGender'
})
@Component({
  selector: 'page-self-gender',
  templateUrl: './self-gender.html'
})
export class SelfGenderPage {
  langs;
  langForm;
  transmitGenderValue : string;
  constructor(public navCtrl: NavController, public service: settingService, public NavParams: NavParams) {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
    this.transmitGenderValue= NavParams.get('value');
  }
  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  // 设置性别
  save(gender) {
    this.service.settingData(undefined, gender, undefined, undefined)
      .then(data => {
        console.log(data);
        if(data.success == true){
          // this.navCtrl.push('SelfEditDataPage');
          console.log(this.transmitGenderValue);
        }
      })
      .catch(error => console.log(error));
  }
}
