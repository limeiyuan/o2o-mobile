import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {SelfFavorPanoramaPage} from "./self-favor-panorama";

@NgModule({
  declarations: [SelfFavorPanoramaPage],
  imports: [IonicPageModule.forChild(SelfFavorPanoramaPage)],
  entryComponents: [SelfFavorPanoramaPage]
})
export class SelfFavorPanoramaPageModule {
}
