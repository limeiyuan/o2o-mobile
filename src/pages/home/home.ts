import {Component,ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {App, NavController, IonicPage} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Slides } from 'ionic-angular';

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


  @ViewChild('mySlider') slider: Slides;

  constructor(public appCtrl: App, public navCtrl: NavController,public statusBar:StatusBar) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#329ff1');
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


}
