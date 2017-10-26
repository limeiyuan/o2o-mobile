import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'SelfFavor'
})
@Component({
  selector: 'page-self-favor',
  templateUrl: './self-favor.html'
})
export class SelfFavorPage {

  constructor(public navCtrl: NavController) {

  }
  directToInclusive(){
    this.navCtrl.push('SelfFavorInclusivePage');
  }
  directToHalfpack(){
    this.navCtrl.push('SelfFavorHalfpackPage');
  }
  directToPanorama(){
    this.navCtrl.push('SelfFavorPanoramaPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
