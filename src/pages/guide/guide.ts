import {Component} from '@angular/core';
import { ViewChild } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import { Slides } from 'ionic-angular';
import * as $ from "jquery";

@IonicPage({
  segment: 'guide'
})
@Component({
  selector: 'page-guide',
  templateUrl: './guide.html'
})
export class GuidePage {
  currentIndex: number = 0;
  constructor(public navCtrl: NavController) {
  }
  @ViewChild(Slides) slides: Slides;
  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex()+1;
    if(this.currentIndex==2||this.currentIndex==3){
      var item = $("#tips-"+this.currentIndex);
      if(item.hasClass("hidden")){
        item.removeClass("hidden");
        item.addClass("guide-show");
      }
    }
  }
}
