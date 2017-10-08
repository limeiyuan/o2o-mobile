import {DemoListPage} from "./demo-list";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [DemoListPage],
  imports: [IonicPageModule.forChild(DemoListPage)],
  entryComponents: [DemoListPage]
})
export class CaseListPageModule {
}
