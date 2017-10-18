import {Component} from '@angular/core';
import {Config, IonicPage, NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: DemoService, public config: Config) {
    console.log(navParams.data);
  }
}
