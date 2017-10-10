import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YanfangPage } from './yanfang';

@NgModule({
  declarations: [YanfangPage],
  imports: [IonicPageModule.forChild(YanfangPage)],
  entryComponents: [YanfangPage]
})

export class YanfangPageModule {}
