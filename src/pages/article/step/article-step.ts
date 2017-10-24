import {Component,Input, Output, EventEmitter} from '@angular/core';
import {NavController, IonicPage, NavParams, Config} from 'ionic-angular';
import {ArticleService} from "../../../providers/article-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";

@IonicPage({
  segment:'articleStep'
})
@Component({
  selector: 'page-article-step',
  templateUrl: './article-step.html'
})
export class ArticleStepPage extends BaseControllerClass {
  // banner可拖拽
  @Input("slides") slides: string[] = [];
  @Input("pageNumber") pageNumber: number = 3.5;
  @Output("slideClick") slideClick = new EventEmitter<number>();

  mySlideOptions;
  selectedIndex: number = 0;
  pageNo : number = 0;
  parentId: string = '';
  articleTitle: string = '';
  articleList : Array<any>;
  constructor(public navCtrl: NavController, public NavParams: NavParams, public service: ArticleService, public picService: PicService, public config: Config) {
    super(picService);
    this.parentId = NavParams.get('id');
    this.classifyArticle();
  }
  // banner可拖拽
  ngOnInit() {
    this.mySlideOptions = {
      loop: false,
      autoplay: false,
      initialSlide: 0,
      pager: false,
      slidesPerView: this.pageNumber,
      paginationHide: true,
      paginationClickable: true
    };
  }

  backListPage(){
    this.navCtrl.pop();
  }
  directToArticleDetail(id) {
    this.navCtrl.push('ArticleDetailPage',{ id : id});
  }
  classifyArticle() {
    this.service.classifyArticle(this.pageNo, undefined, this.parentId)
      .then(data => {
        console.log(data);
        this.articleList = data.result;
        if(this.parentId == '37'){
          this.articleTitle = '装修前';
        }else if(this.parentId == '38'){
          this.articleTitle = '装修中';
        }else if(this.parentId == '39'){
          this.articleTitle = '装修后';
        }
        // A :家装选材
        // B :装修知识
        // C :家居风水与保养
        // D :装修风格与技巧
      })
      .catch(error => console.log(error));
  }
}
