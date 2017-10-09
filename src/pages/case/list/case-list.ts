import {Component} from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {CaseService} from "../../../providers/case-service-rest";
import {CaseDetailPage} from "../detail/case-detail";

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

  constructor(public navCtrl: NavController, public service: CaseService, public config: Config) {
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
      .catch(error => alert(error));

    console.log(this.properties);
  }

  doRefresh(refresh, $event: Event) {
    console.log('刷新');
    refresh.complete();
  }
}
