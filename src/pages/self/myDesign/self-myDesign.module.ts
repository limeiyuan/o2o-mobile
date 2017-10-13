import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfMyDesignPage} from "./self-myDesign";

@NgModule({
  declarations: [SelfMyDesignPage],
  imports: [IonicPageModule.forChild(SelfMyDesignPage)],
  entryComponents: [SelfMyDesignPage]
})
export class SelfMyDesignPageModule {
}
