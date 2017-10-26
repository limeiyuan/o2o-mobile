import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';


import '../assets/rem';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CaseService} from '../providers/case-service-rest';
import {HttpModule} from "@angular/http";
import {DemoService} from "../providers/demo-service-rest";
import {PicService} from "../providers/pic-service-rest";
import {HomeService} from "../providers/home-service-rest";
import {DesignerService} from "../providers/designer-service-rest";
import {ArticleService} from "../providers/article-service-rest";
import {myNewsService} from "../providers/myNews-service-rest";
import {myDesignService} from "../providers/myDesign-service-rest";
import {favorService} from "../providers/favor-service-rest";
import {settingService} from "../providers/setting-service-rest";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CaseService,
    DemoService,
    PicService,
    HomeService,
    DesignerService,
    ArticleService,
    myNewsService,
    myDesignService,
    favorService,
    settingService
  ]
})
export class AppModule {
}
