import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfMyDesignDetail} from "./self-myDesignDetail";

@NgModule({
  declarations: [SelfMyDesignDetail],
  imports: [IonicPageModule.forChild(SelfMyDesignDetail)],
  entryComponents: [SelfMyDesignDetail]
})
export class SelfMyDesignDetailModule {
}
