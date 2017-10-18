import {Component} from '@angular/core';
import {IonicPage} from "ionic-angular";

@IonicPage({
  segment:'tabs'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'HomePage';
  tab2Root = 'CaseListPage';
  tab3Root = 'DesignerListPage';
  tab4Root = 'ArticleListPage';
  tab5Root = 'SelfIndexPage';
  demoPage = 'DemoIndexPage';

  constructor() {

  }
}
