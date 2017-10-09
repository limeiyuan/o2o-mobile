import {Component} from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {DemoService} from "../../../providers/demo-service-rest";
import {DemoDetailPage} from "../detail/demo-detail";
import {PicService} from "../../../providers/pic-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";

@IonicPage({
  segment: 'demoList'
})
@Component({
  selector: 'page-demo-list',
  templateUrl: './demo-list.html'
})
export class DemoListPage extends BaseControllerClass{

  properties = [];
  currentPageNo = 0;

  constructor(public navCtrl: NavController, public service: DemoService, public picService: PicService, public config: Config) {
    super(picService);
    this.query();
  }

  openPropertyDetail(property: any) {
    this.navCtrl.push(DemoDetailPage, property);
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
      .catch(error => alert(error));
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
