import {Component} from '@angular/core';
import {NavController, IonicPage, ModalController} from 'ionic-angular';

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
    let modal = this.modalCtrl.create('SelfFavorPage');
    modal.present();
  }
  directToMyNews(){
    let modal = this.modalCtrl.create('SelfMyNewsPage');
    modal.present();
  }
  directToMyDesign(){
    let modal = this.modalCtrl.create('SelfMyDesignPage');
    modal.present();
  }
}
