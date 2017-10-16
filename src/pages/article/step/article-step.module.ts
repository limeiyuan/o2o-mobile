import {ArticleStepPage} from "./article-step";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [ArticleStepPage],
  imports: [IonicPageModule.forChild(ArticleStepPage)],
  entryComponents: [ArticleStepPage]
})
export class ArticleDetailModule {
}
