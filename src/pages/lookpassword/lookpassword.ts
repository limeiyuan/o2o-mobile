import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LookpasswordPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
