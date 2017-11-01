import {Component, ViewChild} from '@angular/core';
import {Config, IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {DemoService} from "../../../providers/demo-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";

@IonicPage({
  segment: 'demoDetail'
})
@Component({
  selector: 'page-demo-detail',
  templateUrl: './demo-detail.html'
})
export class DemoDetailPage extends BaseControllerClass {

  @ViewChild(Slides) slides: Slides;
  items = [];
  photos = [];
  originId;//初始的案例id
  currentId;//当前展现的案例id
  currentIndex = 0;//当前展现的案例序号
  currentPhotoIndex = 0;//当前展示的图片在案例中的序号

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service: DemoService, public picservice: PicService,
              public config: Config) {
    super(picservice);
    this.currentId = this.originId = this.navParams.get("id");
  }

  /**
   * 向前翻
   */
  getPreItem() {
    if (this.currentIndex <= 0 && this.currentPhotoIndex <= 0) {
      return;
    }
    this.currentPhotoIndex--;
    if (this.currentPhotoIndex < 0) {
      this.currentIndex--;
      this.currentPhotoIndex = this.items[this.currentIndex].photoList.length - 1;
    }
  }

  /**
   * 向后翻
   */
  getNextItem() {
    this.currentPhotoIndex++;
    if (this.currentPhotoIndex >= this.items[this.currentIndex].photoList.length) {
      this.currentIndex++;
      this.currentPhotoIndex = 0;
    }
  }

  /**
   * 翻到最后一张
   * @param {any} callback 回调函数
   */
  queryNext(callback = null) {
    console.log('query');
    this.service.queryDetail(this.currentId)
      .then(resp => {
        this.items.push(resp.result);
        this.photos = this.photos.concat(resp.result.photoList);
        console.log(resp);
        console.log(this.items);
        console.log(this.photos);

        if (callback) {
          callback();
        }
      })
      .catch(error => console.log(error));
  }
}
