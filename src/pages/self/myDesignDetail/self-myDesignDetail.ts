import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'selfMyDesignDetail'
})
@Component({
  selector: 'page-self-myDesignDetail',
  templateUrl: './self-myDesignDetail.html'
})
export class SelfMyDesignDetail {

  constructor(public navCtrl: NavController) {

  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
