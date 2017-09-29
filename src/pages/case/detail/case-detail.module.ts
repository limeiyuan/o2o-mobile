import {CaseDetailPage} from "./case-detail";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [CaseDetailPage],
  imports: [IonicPageModule.forChild(CaseDetailPage)],
  entryComponents: [CaseDetailPage]
})
export class CaseDetailPageModule {
}
