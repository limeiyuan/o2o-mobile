import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'caseDetail'
})
@Component({
  selector: 'page-case-detail',
  templateUrl: './case-detail.html'
})
export class CaseDetailPage {

  constructor(public navCtrl: NavController) {

  }

}
