import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public service: settingService) {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }
  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
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
          this.navCtrl.push('SelfEditDataPage');
        }
      })
      .catch(error => console.log(error));
  }
}
