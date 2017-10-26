import { Component } from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {favorService} from "../../../providers/favor-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";

@IonicPage({
  segment:'SelfFavorHalfpackPage'
})
@Component({
  selector: 'page-self-favor-halfpack',
  templateUrl: './self-favor-halfpack.html'
})
export class SelfFavorHalfpackPage extends BaseControllerClass{
  pageNo : Number = 0;
  halfpackList : Array<any>;

  constructor(public navCtrl: NavController, public service: favorService, public picService: PicService, public config: Config) {
    super(picService);
    this.queryCase();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  queryCase(){
    this.service.queryCase(this.pageNo,undefined, 'banbao')
      .then(data =>{
        console.log(data);
        this.halfpackList = data.result;
      })
      .catch(error => console.log(error));
  }
}
