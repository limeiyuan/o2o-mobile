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

  constructor(public navCtrl: NavController) {
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
