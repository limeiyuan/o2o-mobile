import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfEditDataPage} from "./self-editData";

@NgModule({
  declarations: [SelfEditDataPage],
  imports: [IonicPageModule.forChild(SelfEditDataPage)],
  entryComponents: [SelfEditDataPage]
})
export class SelfEditDataPageModule {
}
