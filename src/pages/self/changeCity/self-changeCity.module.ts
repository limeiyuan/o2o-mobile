import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfChangeCityPage} from "./self-changeCity";

@NgModule({
  declarations: [SelfChangeCityPage],
  imports: [IonicPageModule.forChild(SelfChangeCityPage)],
  entryComponents: [SelfChangeCityPage]
})
export class SelfChangeCityPageModule {
}
