import { Component } from '@angular/core';
import {NavController, IonicPage, Config, NavParams} from 'ionic-angular';
import {myNewsService} from "../../../providers/myNews-service-rest";
import {PicService} from "../../../providers/pic-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";

@IonicPage({
  segment:'selfMyNewsDetail'
})
@Component({
  selector: 'page-self-myNewsDetail',
  templateUrl: './self-myNewsDetail.html'
})
export class SelfMyNewsDetailPage extends BaseControllerClass{
  myNewsId : string;
  myNewsContent : string;
  constructor(public navCtrl: NavController, public NavParams: NavParams, public service: myNewsService,  public picService: PicService, public config: Config) {
    super(picService);
    this.myNewsId = NavParams.get('id');
    this.myNewsContent = NavParams.get('content');
  }

  backListPage(){
    this.navCtrl.pop();
  }
}
