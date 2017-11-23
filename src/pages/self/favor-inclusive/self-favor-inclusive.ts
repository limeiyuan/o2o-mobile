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
  pageCount : Number = 1;
  fullScreenList = [];
  currentPageNo = 1;
  showMode:string;
  loadingText ='加载中';
  enableInfinite = true;


  constructor(public navCtrl: NavController,  public appCtrl: App, public service: favorService, public picService: PicService, public config: Config) {
    super(picService);
    this.queryCase();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  queryCase(callback = null){
    this.service.queryCase(this.currentPageNo,undefined, 'quanbao')
      .then(data =>{
        console.log(data);
        this.fullScreenList = data.result;
        this.pageCount = data.pagination.pageCount;
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
        if (this.currentPageNo >= this.pageCount) {
          console.log('end');
          this.loadingText = '别滑了，没有了';
          return;
        }else{
          this.loadingText = '加载中';
        }
      })
      .catch(error => console.log(error));
  }
  derectToDetail(property: any) {
    this.appCtrl.getRootNav().push('CaseDetailPage', property);
  }

  // 下拉刷新
  doRefresh(refresh, $event: Event) {
    this.currentPageNo = 1;
    this.fullScreenList = [];
    this.queryCase(function () {
      refresh.complete();
    });
  }
  // 上拉加载
  doInfinite(infiniteScroll, $event: Event) {
    this.currentPageNo++;
    this.service.queryCase(this.currentPageNo,undefined, 'quanbao')
      .then(data =>{
        console.log(data);
        this.fullScreenList =  this.fullScreenList.concat(data.result);
        infiniteScroll.complete();
      })
      .catch(error => console.log(error));
    if (this.currentPageNo >= this.pageCount) {
      this.loadingText = '别滑了，没有了';
      console.log('end');
      console.log(this.currentPageNo);
      console.log(this.pageCount);
      setTimeout(function(){
        infiniteScroll.complete();
      },1000);
      return;
    }else{
      this.loadingText = '加载中';
    }
  }
}
