import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfChangeNicknamePage} from "./self-changeNickname";

@NgModule({
  declarations: [SelfChangeNicknamePage],
  imports: [IonicPageModule.forChild(SelfChangeNicknamePage)],
  entryComponents: [SelfChangeNicknamePage]
})
export class SelfChangeNicknamePageModule {
}
