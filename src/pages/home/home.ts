import {Component,ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {App, NavController, IonicPage, Config} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Slides } from 'ionic-angular';
import {HomeService} from "../../providers/home-service-rest";

@IonicPage({
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // 设计师可拖拽
  @Input("slides") slides: string[] = [];
  @Input("pageNumber") pageNumber: number = 2.6;
  @Output("slideClick") slideClick = new EventEmitter<number>();

  mySlideOptions;
  selectedIndex: number = 0;
  articleList: Array<any>;
  caseList: Array<any>;
  designerList: Array<any>;


  @ViewChild('mySlider') slider: Slides;

  constructor(public appCtrl: App, public navCtrl: NavController,public statusBar:StatusBar, public service: HomeService, public config: Config) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#329ff1');
    this.query();
  }
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

  onSlideChanged($event) {
    let currentIndex = this.slider.getActiveIndex();
    console.log(currentIndex);
    if (currentIndex == 0) {
      this.slider.slideTo(3, 0)
    } else if (currentIndex == 4) {
      this.slider.slideTo(1, 0)
    }
  }

  directToDemo() {
    this.appCtrl.getRootNav().push('DemoIndexPage');
  }
  directToYanfang(){
    this.appCtrl.getRootNav().push('YanfangPage');
  }
  directToBaojia(){
    this.appCtrl.getRootNav().push('BaojiaPage');
  }
  directToUnderlineEngineering(){
    this.appCtrl.getRootNav().push('UnderlineEngineeringPage');
  }

// 整合查询
  query() {
    this.service.query()
      .then(data => {
        this.articleList = data.result.article.article;
        this.caseList = data.result.article.case;
        this.designerList = data.result.designer;
        console.log(data);
      })
      .catch(error => console.log(error));
  }
}
