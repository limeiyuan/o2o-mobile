import { Component } from '@angular/core';
import {App, NavController, IonicPage, NavParams, Config} from 'ionic-angular';
import { accountService } from "../../providers/account-service-rest";


@IonicPage({
  segment:'clause'
})
@Component({
  selector: 'page-clause',
  templateUrl: 'clause.html',
  providers: [
    accountService
  ]
})
export class ClausePage {
  content : string;
  constructor(public appCtrl: App, public navCtrl: NavController, public NavParams: NavParams, public service: accountService) {
    this.query();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  query(){
    this.service.query()
      .then(data => {
        console.log(data);
        this.content = data.result.content;
      })
      .catch(error => alert(JSON.stringify(error)));
  }
}
