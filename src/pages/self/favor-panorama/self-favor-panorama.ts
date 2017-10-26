import { Component } from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {favorService} from "../../../providers/favor-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";

@IonicPage({
  segment:'SelfFavorPanoramaPage'
})
@Component({
  selector: 'page-self-favor-panorama',
  templateUrl: './self-favor-panorama.html'
})
export class SelfFavorPanoramaPage extends BaseControllerClass{
  pageNo : Number = 0;
  panramaList : Array<any>;

  constructor(public navCtrl: NavController, public service: favorService, public picService: PicService, public config: Config) {
    super(picService);
    this.queryCase();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  queryCase(){
    this.service.queryCase(this.pageNo,undefined, 'panorama')
      .then(data =>{
        console.log(data);
        this.panramaList = data.result;
      })
      .catch(error => console.log(error));
  }
}
