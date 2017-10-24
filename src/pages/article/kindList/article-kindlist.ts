import {Component} from '@angular/core';
import {App, NavController,IonicPage,NavParams, Config} from 'ionic-angular';
import {ArticleService} from "../../../providers/article-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";

@IonicPage({
  segment:'articlekindList'
})
@Component({
  selector: 'page-article-kindlist',
  templateUrl: 'article-kindlist.html'
})
export class ArticleKindlistPage extends BaseControllerClass {
  selectMaterialList : Array<any>;
  knowledgeList : Array<any>;
  geomancyList : Array<any>;
  styleList : Array<any>;
  articleList : Array<any>;
  pageNo : number = 0;
  parentId : string ='';
  articleTitle : string ='';
  constructor(public appCtrl: App, public navCtrl: NavController, public NavParams: NavParams, public service: ArticleService, public picService: PicService, public config: Config) {
    super(picService);
    this.parentId = NavParams.get('id');
    this.classifyArticle();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  directToArticleDetail(id) {
    this.appCtrl.getRootNav().push('ArticleDetailPage',{ id : id});
  }
  classifyArticle() {
    this.service.classifyArticle(this.pageNo, undefined, this.parentId)
      .then(data => {
        console.log(data);
        this.articleList = data.result;
        if(this.parentId == '37'){
          this.articleTitle = '家装选材';
        }else if(this.parentId == '38'){
          this.articleTitle = '装修知识';
        }else if(this.parentId == '39'){
          this.articleTitle = '家居风水与保养';
        }else if(this.parentId == '40'){
          this.articleTitle = '装修风格与技巧';
        }
        // A :家装选材
        // B :装修知识
        // C :家居风水与保养
        // D :装修风格与技巧
      })
      .catch(error => console.log(error));
  }
}
