import {DemoIndexPage} from "./demo-index";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [DemoIndexPage],
  imports: [IonicPageModule.forChild(DemoIndexPage)],
  entryComponents: [DemoIndexPage]
})
export class CaseDetailPageModule {
}
