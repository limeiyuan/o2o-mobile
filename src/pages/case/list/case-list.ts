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
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public service: CaseService, public config: Config, platform: Platform) {
    this.query();
    this.isAndroid = platform.is('android');
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
}
