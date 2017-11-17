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
  scrollAble ;
  loadingText ;


  constructor(public appCtrl: App, public navCtrl: NavController,  public cd: ChangeDetectorRef, public picService: PicService, public service: DesignerService, public config: Config) {
    super(picService);
    this.query();
    this.scrollAble = true;
    // this.cd.detectChanges();
  }
  openDetailsPage(id) {
    this.appCtrl.getRootNav().push('DesignerDetailPage',{ id: id });
  }
  directToBaojia(id){
    this.appCtrl.getRootNav().push('BaojiaPage', { id: id });
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
        if (callback) {
          callback();
        }
      })
      .catch(error => console.log(error));
  }
  // 下拉刷新
  doRefresh(refresh, $event: Event) {
    this.currentPageNo = 0;
    this.designerList = [];
    this.query(function () {
      refresh.complete();
    });
    }
  // 上拉加载
 //   doInfinite(infiniteScroll, $event: Event) {
 //     this.query(function () {
 //       infiniteScroll.complete();
 //     })
 // }
  doInfinite(infiniteScroll, $event: Event) {
    this.currentPageNo++;
    this.service.query(this.currentPageNo)
      .then(data => {
        console.log(data);
        if(this.currentPageNo>data.pagination.pageCount){
          this.scrollAble = false;
          this.loadingText = '别滑了';
          infiniteScroll.complete();
        }
        this.designerList = this.designerList.concat(data.result);
      })
      .catch(error => console.log(error));
 }
}
