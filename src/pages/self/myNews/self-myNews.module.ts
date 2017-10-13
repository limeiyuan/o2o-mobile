import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfMyNewsPage} from "./self-myNews";

@NgModule({
  declarations: [SelfMyNewsPage],
  imports: [IonicPageModule.forChild(SelfMyNewsPage)],
  entryComponents: [SelfMyNewsPage]
})

export class SelfMyNewsPageModule {
}
