import { Component } from '@angular/core';
import {NavController, IonicPage, NavParams, Config} from 'ionic-angular';
import {PicService} from "../../../providers/pic-service-rest";
import {DesignerService} from "../../../providers/designer-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
@IonicPage({
  segment:'designerDetail'
})
@Component({
  selector: 'page-designer-detail',
  templateUrl: './designer-detail.html'
})
export class DesignerDetailPage extends BaseControllerClass{
  // 默认tab
  viewMode: string = "panorama";
  designerId : Number;
  designerData : object;
  goodStyles : Array<any>;

  constructor(public navCtrl: NavController, public NavParams: NavParams, public picService: PicService, public service: DesignerService, public config: Config) {
    super(picService);
    this.designerId = NavParams.get('id');
    console.log(this.designerId);
    this.querydata(this.designerId);
  }
  backListPage(){
    this.navCtrl.pop();
  }
  querydata(id){
    this.service.querydata(id)
      .then(data =>{
        console.log(data);
        this.designerData = data.result;
        this.goodStyles = data.result.userExtend.goodsStyles
      })
      .catch(error => console.log(error));
  }
}
