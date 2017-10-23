import {Component} from '@angular/core';
import {App, NavController,IonicPage,NavParams, Config} from 'ionic-angular';
import {ArticleService} from "../../../providers/article-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";

@IonicPage({
  segment:'articleList'
})
@Component({
  selector: 'page-article-list',
  templateUrl: 'article-list.html'
})
export class ArticleListPage extends BaseControllerClass {
  constructor(public appCtrl: App, public navCtrl: NavController, public service: ArticleService, public picService: PicService, public config: Config) {
    super(picService);
    this. queryIndex();
  }
  directToStep() {
    this.appCtrl.getRootNav().push('ArticleStepPage');
  }
  directToArticleDetail() {
    this.appCtrl.getRootNav().push('ArticleDetailPage');
  }
  queryIndex() {
    this.service.queryIndex()
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  }
}
