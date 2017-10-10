import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'designerDetail'
})
@Component({
  selector: 'page-designer-detail',
  templateUrl: './designer-detail.html'
})
export class DesignerDetailPage {
  // 默认tab
  viewMode: string = "panorama";

  constructor(public navCtrl: NavController) {
  }
  backListPage(){
    this.navCtrl.pop();
  }

}
