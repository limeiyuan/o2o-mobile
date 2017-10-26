import { Component } from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {favorService} from "../../../providers/favor-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";

@IonicPage({
  segment:'SelfFavorInclusive'
})
@Component({
  selector: 'page-self-favor-inclusive',
  templateUrl: './self-favor-inclusive.html'
})
export class SelfFavorInclusivePage extends BaseControllerClass{
  pageNo : Number = 0;
  fullScreenList : Array<any>;

  constructor(public navCtrl: NavController, public service: favorService, public picService: PicService, public config: Config) {
    super(picService);
    this.queryCase();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  queryCase(){
    this.service.queryCase(this.pageNo,undefined, 'quanbao')
      .then(data =>{
        console.log(data);
        this.fullScreenList = data.result;
      })
      .catch(error => console.log(error));
  }
}
