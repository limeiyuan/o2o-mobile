import {DemoDetailPage} from "./demo-detail";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [DemoDetailPage],
  imports: [IonicPageModule.forChild(DemoDetailPage)],
  entryComponents: [DemoDetailPage]
})
export class CaseDetailPageModule {
}
