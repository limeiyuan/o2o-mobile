import {ArticleListPage} from "./article-list";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [ArticleListPage],
  imports: [IonicPageModule.forChild(ArticleListPage)],
  entryComponents: [ArticleListPage]
})
export class ArticleListPageModule {
}
