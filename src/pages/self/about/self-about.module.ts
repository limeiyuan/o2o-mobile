import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfAboutPage} from "./self-about";

@NgModule({
  declarations: [SelfAboutPage],
  imports: [IonicPageModule.forChild(SelfAboutPage)],
  entryComponents: [SelfAboutPage]
})
export class SelfAboutPageModule {
}
