import {Component} from '@angular/core';
import {NavController, IonicPage, App, ModalController} from 'ionic-angular';

@IonicPage({
  segment: 'selfIndex'
})
@Component({
  selector: 'page-self-index',
  templateUrl: './self-index.html'
})
export class SelfIndexPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  directToSetting() {
    let modal = this.modalCtrl.create('SelfSettingPage');
    modal.present();
  }
  directToFavor(){
    this.navCtrl.push('SelfFavorPage');
  }
}
