import {Component} from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {DemoService} from "../../../providers/demo-service-rest";

@IonicPage({
  segment: 'demoIndex'
})
@Component({
  selector: 'page-demo-index',
  templateUrl: './demo-index.html'
})
export class DemoIndexPage {

  properties: Array<any>;

  constructor(public navCtrl: NavController, public service: DemoService, public config: Config) {

  }

  directToList() {
    this.navCtrl.push('DemoListPage');
  }
}
