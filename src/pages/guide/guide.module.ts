import { GuidePage } from './guide';
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [GuidePage],
  imports: [IonicPageModule.forChild(GuidePage)],
  entryComponents: [GuidePage]
})
export class GuidePageModule {
}
