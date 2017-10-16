import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {UnderlineEngineeringPage} from "./underlineEngineering";


@NgModule({
  declarations: [UnderlineEngineeringPage],
  imports: [IonicPageModule.forChild(UnderlineEngineeringPage)],
  entryComponents: [UnderlineEngineeringPage]
})
export class UnderlineEngineeringModule {
}
