import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LookpasswordPage } from './lookpassword';

@NgModule({
  declarations: [
    LookpasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(LookpasswordPage),
  ],
  entryComponents: [LookpasswordPage],
})
export class LookpasswordPageModule {}
