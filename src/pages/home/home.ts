import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage({
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public statusBar:StatusBar) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#329ff1');
  }

}
