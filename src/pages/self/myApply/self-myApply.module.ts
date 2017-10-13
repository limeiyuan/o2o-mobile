import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfMyApplyPage} from "./self-myApply";

@NgModule({
  declarations: [SelfMyApplyPage],
  imports: [IonicPageModule.forChild(SelfMyApplyPage)],
  entryComponents: [SelfMyApplyPage]
})

export class SelfMyApplyPageModule {
}
