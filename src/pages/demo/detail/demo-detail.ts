import {Component} from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {DemoService} from "../../../providers/demo-service-rest";

@IonicPage({
  segment: 'demoDetail'
})
@Component({
  selector: 'page-demo-detail',
  templateUrl: './demo-detail.html'
})
export class DemoDetailPage {

  properties: Array<any>;

  constructor(public navCtrl: NavController, public service: DemoService, public config: Config) {

  }
}
