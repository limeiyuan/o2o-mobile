import {Component} from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {CaseService} from "../../../providers/case-service-rest";

@IonicPage({
  segment: 'caseDetail'
})
@Component({
  selector: 'page-case-detail',
  templateUrl: './case-detail.html'
})
export class CaseDetailPage {

  properties: Array<any>;

  constructor(public navCtrl: NavController, public service: CaseService, public config: Config) {

  }

  findAll() {
    this.service.findAll()
      .then(data => this.properties = data)
      .catch(error => alert(error));
  }

}
