import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfChangePasswordPage} from "./self-changePassword";

@NgModule({
  declarations: [SelfChangePasswordPage],
  imports: [IonicPageModule.forChild(SelfChangePasswordPage)],
  entryComponents: [SelfChangePasswordPage]
})
export class SelfChangePasswordPageModule {
}
