import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfFavorHalfpackPage} from "./self-favor-halfpack";

@NgModule({
  declarations: [SelfFavorHalfpackPage],
  imports: [IonicPageModule.forChild(SelfFavorHalfpackPage)],
  entryComponents: [SelfFavorHalfpackPage]
})
export class SelfFavorHalfpackPageModule {
}
