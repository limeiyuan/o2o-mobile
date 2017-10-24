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
  selectMaterialList : Array<any>;
  knowledgeList : Array<any>;
  geomancyList : Array<any>;
  styleList : Array<any>;
  constructor(public appCtrl: App, public navCtrl: NavController, public service: ArticleService, public picService: PicService, public config: Config) {
    super(picService);
    this.queryIndex();
  }
  directToStep(id) {
    this.appCtrl.getRootNav().push('ArticleStepPage',{ id : id});
  }
  directToArticleDetail(id) {
    this.appCtrl.getRootNav().push('ArticleDetailPage',{ id : id});
  }
  directToMoreArticle(id) {
    this.appCtrl.getRootNav().push('ArticleKindlistPage',{ id : id});
  }
  queryIndex() {
    this.service.queryIndex()
      .then(data => {
        console.log(data);
        // A :家装选材
        // B :装修知识
        // C :家居风水与保养
        // D :装修风格与技巧
        this.selectMaterialList = data.result.A;
        this.knowledgeList = data.result.B;
        this.geomancyList = data.result.C;
        this.styleList = data.result.D;
      })
      .catch(error => console.log(error));
  }
}
