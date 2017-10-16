import {Component} from '@angular/core';
import {App, NavController,IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'articleList'
})
@Component({
  selector: 'page-article-list',
  templateUrl: 'article-list.html'
})
export class ArticleListPage {
  constructor(public appCtrl: App, public navCtrl: NavController,) {
  }
  directToStep() {
    this.appCtrl.getRootNav().push('ArticleStepPage');
  }
  directToArticleDetail() {
    this.appCtrl.getRootNav().push('ArticleDetailPage');
  }
}
