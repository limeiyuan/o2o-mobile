import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfIndexPage} from "./self-index";

@NgModule({
  declarations: [SelfIndexPage],
  imports: [IonicPageModule.forChild(SelfIndexPage)],
  entryComponents: [SelfIndexPage]
})
export class SelfIndexPageModule {
}
