import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfMyDesignDetailPage} from "./self-myDesignDetail";

@NgModule({
  declarations: [SelfMyDesignDetailPage],
  imports: [IonicPageModule.forChild(SelfMyDesignDetailPage)],
  entryComponents: [SelfMyDesignDetailPage]
})
export class SelfMyDesignDetailModule {
}
