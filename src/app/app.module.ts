import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {DesignerListPage} from "../pages/designer/list/designer-detail";
import {SelfIndexPage} from "../pages/self/index/self-index";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CaseListPage} from "../pages/case/list/case-list";
import {ArticleDetailPage} from "../pages/article/detail/article-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CaseListPage,
    DesignerListPage,
    SelfIndexPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: ArticleDetailPage, name: 'ArticleDetail', segment: 'article'}
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CaseListPage,
    DesignerListPage,
    SelfIndexPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
