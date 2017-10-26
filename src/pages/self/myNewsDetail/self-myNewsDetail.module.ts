import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfMyNewsDetailPage} from "./self-myNewsDetail";

@NgModule({
  declarations: [SelfMyNewsDetailPage],
  imports: [IonicPageModule.forChild(SelfMyNewsDetailPage)],
  entryComponents: [SelfMyNewsDetailPage]
})
export class SelfMyNewsDetailModule {
}
