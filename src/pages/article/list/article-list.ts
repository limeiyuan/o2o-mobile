import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage({
  name: 'article-list',
  segment: 'article-list'
})
@Component({
  selector: 'page-article-list',
  templateUrl: 'article-list.html'
})
export class ArticleListPage {

  constructor(public navCtrl: NavController) {

  }

  navigateTo() {
    // go to the About component
    this.navCtrl.push('ArticleListPage');
  }

}
