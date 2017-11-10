import { Component } from '@angular/core';
import {NavController, IonicPage, Config, App} from 'ionic-angular';
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
  fullScreenList = [];
  currentPageNo = 0;
  showMode:string;


  constructor(public navCtrl: NavController,  public appCtrl: App, public service: favorService, public picService: PicService, public config: Config) {
    super(picService);
    this.queryCase();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  queryCase(callback = null){
    this.currentPageNo++;
    this.service.queryCase(this.pageNo,undefined, 'quanbao')
      .then(data =>{
        console.log(data);
        this.fullScreenList = this.fullScreenList.concat(data.result);
        // if(this.fullScreenList.length == 0){
        //   debugger;
        //   this.showMode = 'noneFullScreen';
        // }else{
        //   debugger;
        //   this.showMode = 'haveFullScreen';
        // }
        if (callback) {
          callback();
        }
      })
      .catch(error => console.log(error));
  }
  derectToDetail(property: any) {
    this.appCtrl.getRootNav().push('CaseDetailPage', property);
  }

  // 下拉刷新
  doRefresh(refresh, $event: Event) {
    this.currentPageNo = 0;
    this.fullScreenList = [];
    this.queryCase(function () {
      refresh.complete();
    });
  }
  // 上拉加载
  doInfinite(infiniteScroll, $event: Event) {
    this.queryCase(function () {
      infiniteScroll.complete();
    })
  }
}
