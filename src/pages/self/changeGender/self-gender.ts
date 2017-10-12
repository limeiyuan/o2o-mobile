import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

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

  constructor(public navCtrl: NavController) {
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
}
