import {Component} from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {CaseService} from "../../../providers/case-service-rest";
import {CaseDetailPage} from "../detail/case-detail";
import { Platform } from 'ionic-angular';

@IonicPage({
  segment: 'caseList'
})
@Component({
  selector: 'page-case-list',
  templateUrl: './case-list.html'
})
export class CaseListPage {

  properties: Array<any>;
  currentPageNo = 0;

// tab标题切换
  viewMode: string = "fullScreen";

  segmentsArray = ['segmentOne','segmentTwo','segmentThree'];
  segmentModel: string = this.segmentsArray[0];

  constructor(public navCtrl: NavController, public service: CaseService, public config: Config, platform: Platform) {
    this.query();
  }

  openPropertyDetail(property: any) {
    this.navCtrl.push(CaseDetailPage, property);
  }

  query() {
    this.currentPageNo++;
    this.service.query(this.currentPageNo)
      .then(resp => {
        this.properties = resp.result;
      })
      .catch(error => console.log(error));

    console.log(this.properties);
  }

  doRefresh(refresh, $event: Event) {
    console.log('刷新');
    refresh.complete();
  }

  swipeEvent(event) {
    debugger;
    //向左滑
    if (event.direction == 2) {
      if (this.segmentsArray.indexOf(this.segmentModel) < 2) {
        this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) + 1];
      }
    }
//向右滑
    if (event.direction == 4) {
      if (this.segmentsArray.indexOf(this.segmentModel) > 0) {
        this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) - 1];
      }
    }
  }
}
