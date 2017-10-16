import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'articleStep'
})
@Component({
  selector: 'page-article-step',
  templateUrl: './article-step.html'
})
export class ArticleStepPage {
  constructor(public navCtrl: NavController) {
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
