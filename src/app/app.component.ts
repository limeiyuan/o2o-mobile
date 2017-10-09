import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage: any

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    var isFirst = !localStorage.getItem('FIRST')
    if(isFirst) {
      localStorage.setItem('FIRST', '0')
      this.rootPage = 'GuidePage'
    } else {
      this.rootPage = 'TabsPage';
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
