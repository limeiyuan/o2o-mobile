import {Component, ChangeDetectorRef} from '@angular/core';
import {App, NavController, IonicPage, Config} from 'ionic-angular';
import {PicService} from "../../../providers/pic-service-rest";
import {DesignerService} from "../../../providers/designer-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";


@IonicPage({
  segment: 'designerList'
})
@Component({
  selector: 'page-designer-list',
  templateUrl: './designer-list.html'
})
export class DesignerListPage extends BaseControllerClass{
  currentPageNo = 1;
  designerList = [];
  loadingText='加载中';
  pageCount = 1;
  enableInfinite = true;
  id: number;
  requestCount:number;
  constructor(public appCtrl: App, public navCtrl: NavController,  public cd: ChangeDetectorRef, public picService: PicService, public service: DesignerService, public config: Config) {
    super(picService);
  }
  ionViewWillEnter() {
    this.query();
    console.log('query');
  }
  openDetailsPage(id) {
    this.appCtrl.getRootNav().push('DesignerDetailPage',{ id: id });
  }
  directToBaojia(id, requestCount){
    let _self = this;
    let demo = function (id, requestCount) {
      return new Promise((resolve) => {
        _self.requestCount = requestCount;
        console.log(_self.requestCount);
        resolve();
      })
    };
    this.appCtrl.getRootNav().push('BaojiaPage', {id: id, requestCount: requestCount, callback: demo});
    // this.appCtrl.getRootNav().push('BaojiaPage', { id: id });
  }
  derectToDetail(property: any) {
    this.appCtrl.getRootNav().push('CaseDetailPage', property);
  }
// 设计师列表查询
  query(callback = null) {
    this.service.query(this.currentPageNo)
      .then(data => {
        console.log(data);
        // this.designerList = this.designerList.concat(data.result);
        this.designerList = data.result;
        this.pageCount = data.pagination.pageCount;
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
  // 下拉刷新
  doRefresh(refresh, $event: Event) {
    this.currentPageNo = 1;
    this.designerList = [];
    this.query(function () {
      refresh.complete();
    });
    }
  // 上拉加载
  doInfinite(infiniteScroll, $event: Event) {
    this.currentPageNo++;
    console.log(this.currentPageNo);
    console.log(this.pageCount);
    this.service.query(this.currentPageNo)
      .then(data => {
        console.log(data);
        this.designerList = this.designerList.concat(data.result);
        infiniteScroll.complete();
      })
      .catch(error => console.log(error));
      if (this.currentPageNo >= this.pageCount) {
        console.log('end');
        this.loadingText = '别滑了，没有了';
        setTimeout(function(){
          infiniteScroll.complete();
        },1000);
        return;
      }
 }
}
