import { Component } from '@angular/core';
import {NavController, IonicPage, Config, NavParams} from 'ionic-angular';
import {myDesignService} from "../../../providers/myDesign-service-rest";
import {PicService} from "../../../providers/pic-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";

@IonicPage({
  segment:'selfMyDesignDetail'
})
@Component({
  selector: 'page-self-myDesignDetail',
  templateUrl: './self-myDesignDetail.html'
})
export class SelfMyDesignDetailPage extends BaseControllerClass{
  mydesignId : string = '';
  designDetailData : object;
  constructor(public navCtrl: NavController, public NavParams: NavParams, public service: myDesignService,  public picService: PicService, public config: Config) {
    super(picService);
    this.mydesignId = NavParams.get('id');
    console.log(this.mydesignId);
    this.queryDesignDetail(this.mydesignId);
  }
  // 编辑理念
  directToEdit(id, detailId, content){
    let _self = this;
    let demo = function (content) {
      return new Promise((resolve)=>{
        resolve();
        _self.designDetailData['content'] = content;
      })
    };
    this.navCtrl.push('SelfDesignEditPage',{id:id, detailId:detailId, content:content, callback:demo});
  }
  backListPage(){
    this.navCtrl.pop();
  }
  // 云设计详情
  queryDesignDetail(id) {
    this.service.queryDesignDetail(id)
      .then(data => {
        console.log(data);
        this.designDetailData = data.result;
      })
      .catch(error => console.log(error));
  }
}
