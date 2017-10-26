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
  nickname : string = '';
  provinceName : string = '北京市';
  workingTime : string = '';
  photoPath : string = '';
  panorama : object;
  pageNo : Number = 1;
  panoramaList : Array<any>;
  caseList : Array<any>;


  constructor(public navCtrl: NavController, public NavParams: NavParams, public picService: PicService, public service: DesignerService, public config: Config) {
    super(picService);
    this.designerId = NavParams.get('id');
    console.log(this.designerId);
    this.querydata(this.designerId);
    this.queryPanorama(this.designerId);
    this.queryCase(this.designerId);
  }
  backListPage(){
    this.navCtrl.pop();
  }
  directToBaojia(id){
    this.navCtrl.push('BaojiaPage', { id: id });
  }
  querydata(id){
    this.service.querydata(id)
      .then(data =>{
        console.log(data);
        this.designerData = data.result;
        this.nickname = data.result.nickname;
        this.provinceName = data.result.userExtend.location.provinceName;
        this.workingTime = data.result.userExtend.workingTime;
        this.goodStyles = data.result.userExtend.goodsStyles
      })
      .catch(error => console.log(error));
  }
  queryPanorama(id){
    this.service.queryPanorama(this.pageNo, undefined, id)
      .then(data =>{
        console.log(data);
        this.panoramaList = data.result;
      })
      .catch(error => console.log(error));
  }
  queryCase(id){
    this.service.queryCase(this.pageNo, undefined, id)
      .then(data =>{
        console.log(data);
        this.caseList = data.result;
      })
      .catch(error => console.log(error));
  }
}
