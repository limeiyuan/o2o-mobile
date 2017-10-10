import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'designerDetailCase'
})
@Component({
  selector: 'page-designer-detailCase',
  templateUrl: './designer-detailCase.html'
})
export class DesignerDetailCasePage {

  constructor(public navCtrl: NavController) {
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
