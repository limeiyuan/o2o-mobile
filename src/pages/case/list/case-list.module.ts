import {CaseListPage} from "./case-list";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [CaseListPage],
  imports: [IonicPageModule.forChild(CaseListPage)],
  entryComponents: [CaseListPage]
})
export class CaseListPageModule {
}
