import {ClausePage} from "./clause";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [ClausePage],
  imports: [IonicPageModule.forChild(ClausePage)],
  entryComponents: [ClausePage]
})
export class ClauseModule {
}
