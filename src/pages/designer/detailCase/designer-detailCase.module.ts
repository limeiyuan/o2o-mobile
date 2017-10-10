import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {DesignerDetailCasePage} from "./designer-detailCase";

@NgModule({
  declarations: [DesignerDetailCasePage],
  imports: [IonicPageModule.forChild(DesignerDetailCasePage)],
  entryComponents: [DesignerDetailCasePage]
})
export class DesignerDetailCasePageModule {
}
