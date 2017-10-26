import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfFavorInclusivePage} from "./self-favor-inclusive";

@NgModule({
  declarations: [SelfFavorInclusivePage],
  imports: [IonicPageModule.forChild(SelfFavorInclusivePage)],
  entryComponents: [SelfFavorInclusivePage]
})
export class SelfFavorHalfpackPageModule {
}
