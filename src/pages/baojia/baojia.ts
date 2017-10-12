import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  backListPage(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BaojiaPage');
  }

}
