import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfDesignEditPage} from "./self-designEdit";

@NgModule({
  declarations: [SelfDesignEditPage],
  imports: [IonicPageModule.forChild(SelfDesignEditPage)],
  entryComponents: [SelfDesignEditPage]
})
export class SelfDesignEditPageModule {
}
