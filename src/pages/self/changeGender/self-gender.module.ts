import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfGenderPage} from "./self-gender";

@NgModule({
  declarations: [SelfGenderPage],
  imports: [IonicPageModule.forChild(SelfGenderPage)],
  entryComponents: [SelfGenderPage]
})
export class SelfGenderPageModule {
}
