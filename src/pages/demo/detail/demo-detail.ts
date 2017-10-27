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

  items: Array<any>;
  currentId;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: DemoService, public config: Config) {
    console.log(navParams.data);
    this.currentId = this.navParams.get("id");
    this.query();
  }

  query(callback = null) {
    this.service.queryDetail(this.currentId)
      .then(resp => {
        console.log(resp.result);
        this.items = this.items.concat(resp.result);
        if (callback) {
          callback();
        }
      })
      .catch(error => console.log(error));
    console.log(this.items);
  }

  queryNext(callback = null) {
    this.service.queryDetail(this.currentId)
      .then(resp => {
        this.items = this.items.concat(resp.result);
        if (callback) {
          callback();
        }
      })
      .catch(error => console.log(error));
    console.log(this.items);
  }
}
