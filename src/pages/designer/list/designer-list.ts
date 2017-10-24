import {Component} from '@angular/core';
import {App, NavController, IonicPage, Config} from 'ionic-angular';
import {PicService} from "../../../providers/pic-service-rest";
import {DesignerService} from "../../../providers/designer-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import * as $ from "jquery";


@IonicPage({
  segment: 'designerList'
})
@Component({
  selector: 'page-designer-list',
  templateUrl: './designer-list.html'
})
export class DesignerListPage extends BaseControllerClass{
  pageNo : Number = 0;
  designerList: Array<any>;

  constructor(public appCtrl: App, public navCtrl: NavController, public picService: PicService, public service: DesignerService, public config: Config) {
    super(picService);
    this.query();
  }
  openDetailsPage(id) {
    this.appCtrl.getRootNav().push('DesignerDetailPage',{ id: id });
  }
  directToBaojia(id){
    this.appCtrl.getRootNav().push('BaojiaPage', { id: id });
  }
// 设计师列表查询
  query() {
    this.service.query(this.pageNo,undefined)
      .then(data => {
        console.log(data);
        this.designerList = data.result;

      })
      .catch(error => console.log(error));
  }
}
