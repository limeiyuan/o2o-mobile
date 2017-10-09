import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'articleDetail'
})
@Component({
  selector: 'page-article-detail',
  templateUrl: './article-detail.html'
})
export class ArticleDetailPage {
  constructor(public navCtrl: NavController) {
  }
}
