import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment: 'caseList'
})
@Component({
  selector: 'page-case-list',
  templateUrl: './case-list.html'
})
export class CaseListPage {
  constructor(public navCtrl: NavController) {
  }
}
