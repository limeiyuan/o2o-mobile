import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {DesignerDetailPage} from "./designer-detail";

@NgModule({
  declarations: [DesignerDetailPage],
  imports: [IonicPageModule.forChild(DesignerDetailPage)],
  entryComponents: [DesignerDetailPage]
})
export class DesignerDetailPageModule {
}
