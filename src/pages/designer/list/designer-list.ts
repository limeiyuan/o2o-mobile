import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment: 'designerList'
})
@Component({
  selector: 'page-designer-list',
  templateUrl: './designer-list.html'
})
export class DesignerListPage {

  constructor(public navCtrl: NavController) {

  }

}
