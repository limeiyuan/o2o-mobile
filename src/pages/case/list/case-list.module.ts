import {CaseListPage} from "./case-list";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [CaseListPage],
  imports: [IonicPageModule.forChild(CaseListPage)],
  entryComponents: [CaseListPage]
})
export class CaseListPageModule {
}
