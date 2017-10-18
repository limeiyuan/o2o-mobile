import {Component,ViewChild, Input, Output, EventEmitter} from '@angular/core';

import {NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  segment:'articleStep'
})
@Component({
  selector: 'page-article-step',
  templateUrl: './article-step.html'
})
export class ArticleStepPage {
  // banner可拖拽
  @Input("slides") slides: string[] = [];
  @Input("pageNumber") pageNumber: number = 3.5;
  @Output("slideClick") slideClick = new EventEmitter<number>();

  mySlideOptions;
  selectedIndex: number = 0;
  constructor(public navCtrl: NavController) {
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
}
