import { Component } from '@angular/core';
import {App, NavController, IonicPage, NavParams, Config} from 'ionic-angular';
import {PicService} from "../../../providers/pic-service-rest";
import {ArticleService} from "../../../providers/article-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";

@IonicPage({
  segment:'articleDetail'
})
@Component({
  selector: 'page-article-detail',
  templateUrl: './article-detail.html'
})
export class ArticleDetailPage extends BaseControllerClass{
  articleId : number;
  content : string = '';
  title : string = '';
  kind : string = '';
  pageNo : Number = 1;
  articleList : Array<any>;

  constructor(public appCtrl: App, public navCtrl: NavController, public NavParams: NavParams, public picService: PicService, public service: ArticleService, public config: Config) {
    super(picService);
    this.articleId = NavParams.get('id');
    console.log(this.articleId);
    this.articleDetail();
    this.relativeRisk();
  }
  directToArticleDetail(id) {
    this.appCtrl.getRootNav().push('ArticleDetailPage',{ id : id});
  }
  // 文章详情
  articleDetail() {
    this.service.articleDetail(this.articleId)
      .then(data => {
        console.log(data);
        this.content = data.result.content;
        this.title = data.result.title;
        this.kind = data.result.kindDic.name; //所属类别
      })
      .catch(error => console.log(error));
  }
  // 相关阅读
  relativeRisk() {
    this.service.relativeRisk(this.pageNo, undefined, this.articleId)
      .then(data => {
        console.log(data);
        this.articleList = data.result;
      })
      .catch(error => console.log(error));
  }
  backListPage(){
    this.navCtrl.pop();
  }
}
