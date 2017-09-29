import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {CaseListPage} from "../case/list/case-list";
import {DesignerListPage} from "../designer/list/designer-detail";
import {ArticleListPage} from "../article/list/article-list";
import {SelfIndexPage} from "../self/index/self-index";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CaseListPage;
  tab3Root = DesignerListPage;
  tab4Root = ArticleListPage;
  tab5Root = SelfIndexPage;

  constructor() {

  }
}
