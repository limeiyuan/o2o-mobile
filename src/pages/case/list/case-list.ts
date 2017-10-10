import {Component, ViewChild} from '@angular/core';
import {NavController, IonicPage, Config, NavParams} from 'ionic-angular';
import {CaseService} from "../../../providers/case-service-rest";
import {CaseDetailPage} from "../detail/case-detail";
import { Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular';



@IonicPage({
  segment: 'caseList'
})
@Component({
  selector: 'page-case-list',
  templateUrl: './case-list.html'
})
export class CaseListPage {

  @ViewChild('mySlider') slider: Slides;

  private selected_segment = 0;
  top_segment = 'top_0';
  segment = 'sites';

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.platform = platform;

    for(let i = 0; i < 10; i++ ){
      this.data_group.push({
        id: i,
        title: 'Title '+i,
        details: [{"a":"Lorem"}, {"a":"ipsum"}, {"a":"dolor"},{"a":"sit"},{"a":"amet"}],
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
    }
  }

  data_group: Array<{id:number, title: string, details: any, icon: string, showDetails: boolean}> = [];

  select(index)
  {
    if (index === 2){
      this.top_segment = 'top_2';
    }
    if (index === 1){
      this.top_segment = 'top_1';
    }
    if (index === 0){
      this.top_segment = 'top_0';
    }
    this.slider.slideTo(index, 500);
  }

  select_segment(index)
  {
    this.selected_segment = index;
    console.log("this.selected_segment: " + this.selected_segment);
  }

  onSlideChanged($event)
  {
    if (((($event.touches.startX - $event.touches.currentX) <= 100) || (($event.touches.startX - $event.touches.currentX) > 0)) && (this.slider.isBeginning() || this.slider.isEnd()))
    {
    }
    else
    {
    }

  }

  panEvent(e)
  {
    let currentIndex = this.slider.getActiveIndex();
    if (currentIndex === 2){
      this.top_segment = 'top_2';
    }
    if (currentIndex === 1){
      this.top_segment = 'top_1';
    }
    if (currentIndex === 0){
      this.top_segment = 'top_0';
    }
  }

}
// export class CaseListPage {
//
//   properties: Array<any>;
//   currentPageNo = 0;
//
// // tab标题切换
//   viewMode: string = "fullScreen";
//
//   segmentsArray = ['segmentOne','segmentTwo','segmentThree'];
//   segmentModel: string = this.segmentsArray[0];
//
//   constructor(public navCtrl: NavController, public service: CaseService, public config: Config, platform: Platform) {
//     this.query();
//   }
//
//   openPropertyDetail(property: any) {
//     this.navCtrl.push(CaseDetailPage, property);
//   }
//
//   query() {
//     this.currentPageNo++;
//     this.service.query(this.currentPageNo)
//       .then(resp => {
//         this.properties = resp.result;
//       })
//       .catch(error => console.log(error));
//
//     console.log(this.properties);
//   }
//
//   doRefresh(refresh, $event: Event) {
//     console.log('刷新');
//     refresh.complete();
//   }
//
//   swipeEvent(event) {
//     debugger;
//     //向左滑
//     if (event.direction == 2) {
//       if (this.segmentsArray.indexOf(this.segmentModel) < 2) {
//         this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) + 1];
//       }
//     }
// //向右滑
//     if (event.direction == 4) {
//       if (this.segmentsArray.indexOf(this.segmentModel) > 0) {
//         this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) - 1];
//       }
//     }
//   }
// }
