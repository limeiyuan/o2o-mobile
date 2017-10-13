import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfFavorPage} from "./self-favor";

@NgModule({
  declarations: [SelfFavorPage],
  imports: [IonicPageModule.forChild(SelfFavorPage)],
  entryComponents: [SelfFavorPage]
})
export class SelfFavorPageModule {
}
