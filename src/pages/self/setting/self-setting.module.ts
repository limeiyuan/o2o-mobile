import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfSettingPage} from "./self-setting";

@NgModule({
  declarations: [SelfSettingPage],
  imports: [IonicPageModule.forChild(SelfSettingPage)],
  entryComponents: [SelfSettingPage]
})
export class SelfSettingPageModule {
}
