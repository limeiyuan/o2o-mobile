import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {CaseListPage} from "../case/list/case-list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CaseListPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
