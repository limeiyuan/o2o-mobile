import {Component,ViewChild} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Slides } from 'ionic-angular';


@IonicPage({
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;

  constructor(public navCtrl: NavController,public statusBar:StatusBar) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#329ff1');
  }

  onSlideChanged($event) {
    let currentIndex = this.slider.getActiveIndex();
    console.log(currentIndex)
    if (currentIndex == 0) {
      this.slider.slideTo(3, 0)
    } else if (currentIndex == 4) {
      this.slider.slideTo(1, 0)
    }
  }

  directToDemo() {
    this.navCtrl.push('DemoIndexPage');
  }
  directToYanfang(){
    this.navCtrl.push('YanfangPage');
  }
  directToBaojia(){
    this.navCtrl.push('BaojiaPage');
  }
}
