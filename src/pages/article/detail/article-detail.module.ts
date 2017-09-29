import {ArticleDetailPage} from "./article-detail";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [ArticleDetailPage],
  imports: [IonicPageModule.forChild(ArticleDetailPage)],
  entryComponents: [ArticleDetailPage]
})
export class ArticleDetailModule {
}
