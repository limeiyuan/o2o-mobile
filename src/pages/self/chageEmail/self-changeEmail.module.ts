import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfChangeEmailPage} from "./self-changeEmail";

@NgModule({
  declarations: [SelfChangeEmailPage],
  imports: [IonicPageModule.forChild(SelfChangeEmailPage)],
  entryComponents: [SelfChangeEmailPage]
})
export class SelfChangeEmailPageModule {
}
