import {ArticleKindlistPage} from "./article-kindlist";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [ArticleKindlistPage],
  imports: [IonicPageModule.forChild(ArticleKindlistPage)],
  entryComponents: [ArticleKindlistPage]
})
export class ArticlekindlistPageModule {
}
