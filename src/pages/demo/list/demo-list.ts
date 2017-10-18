import {Component} from '@angular/core';
import {App, Config, IonicPage, NavController} from 'ionic-angular';
import {DemoService} from "../../../providers/demo-service-rest";
import {PicService} from "../../../providers/pic-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";

@IonicPage({
  segment: 'demoList'
})
@Component({
  selector: 'page-demo-list',
  templateUrl: './demo-list.html'
})
export class DemoListPage extends BaseControllerClass {

  properties = [];
  currentPageNo = 0;

  constructor(public navCtrl: NavController, public appCtrl: App, public service: DemoService, public picService: PicService, public config: Config) {
    super(picService);
    this.query();
  }

  openPropertyDetail(property: any) {
    this.appCtrl.getRootNav().push('DemoDetailPage', property);
  }

  query(callback = null) {
    this.currentPageNo++;
    this.service.query(this.currentPageNo)
      .then(resp => {
        this.properties = this.properties.concat(resp.result);
        if (callback) {
          callback();
        }
      })
      .catch(error => console.log(error));
    console.log(this.properties);
  }

  //下拉刷新整个页面
  doRefresh(refresh, $event: Event) {
    this.currentPageNo = 0;
    this.properties = [];
    this.query(function () {
      refresh.complete();
    });
  }

  //上拉加载更多
  doInfinite(infiniteScroll, $event: Event) {
    this.query(function () {
      infiniteScroll.complete();
    })
  }
}
