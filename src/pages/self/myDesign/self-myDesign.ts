import { Component } from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {myDesignService} from "../../../providers/myDesign-service-rest";
import {PicService} from "../../../providers/pic-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
@IonicPage({
  segment:'selfMyDesign'
})
@Component({
  selector: 'page-self-myDesign',
  templateUrl: './self-myDesign.html'
})
export class SelfMyDesignPage extends BaseControllerClass{
  pageNo : Number = 1;
  myDesignList : Array<any>;
  constructor(public navCtrl: NavController, public service: myDesignService,  public picService: PicService, public config: Config) {
    super(picService);
    this.queryDesign();
  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
  }
  directToDesignDetail(id){
    this.navCtrl.push('SelfMyDesignDetailPage',{id:id});
  }
  backListPage(){
    this.navCtrl.pop();
  }
  // 云设计查询
  queryDesign() {
    this.service.queryDesign(this.pageNo, undefined)
      .then(data => {
        console.log(data);
        this.myDesignList = data.result;
      })
      .catch(error => console.log(error));
  }
}
