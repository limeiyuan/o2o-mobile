import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {DesignerListPage} from "./designer-list";

@NgModule({
  declarations: [DesignerListPage],
  imports: [IonicPageModule.forChild(DesignerListPage)],
  entryComponents: [DesignerListPage]
})
export class DesignerListPageModule {
}
