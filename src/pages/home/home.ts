import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  directToDemo() {
    this.navCtrl.push('DemoIndexPage');
  }

}
