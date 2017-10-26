import { Component } from '@angular/core';
import {NavController, IonicPage, NavParams} from 'ionic-angular';
import {myDesignService} from "../../../providers/myDesign-service-rest";

@IonicPage({
  segment:'selfDesignEdit'
})
@Component({
  selector: 'page-self-designEdit',
  templateUrl: './self-designEdit.html'
})
export class SelfDesignEditPage {
  mydesignId:string='';
  detailId:string='';
  transmitContent:string='';
  designContent:string = this.transmitContent;

  constructor(public navCtrl: NavController, public NavParams: NavParams, public service: myDesignService,) {
    this.mydesignId = NavParams.get('id');
    this.detailId = NavParams.get('detailId');
    this.transmitContent = NavParams.get('content');
    console.log(this.mydesignId);
    console.log(this.detailId);
    console.log(this.transmitContent);
  }
  backListPage(){
    this.navCtrl.pop();
  }
  // 保存编辑
  editDesignIdea() {
    this.service.editDesignIdea(this.mydesignId, this.detailId, this.designContent)
      .then(data => {
        console.log(data);
        this.navCtrl.pop();
      })
      .catch(error => console.log(error));
  }
}
