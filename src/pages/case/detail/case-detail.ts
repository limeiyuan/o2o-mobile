import {Component} from '@angular/core';
import {NavController, IonicPage, Config, NavParams, Slides} from 'ionic-angular';
import {CaseService} from "../../../providers/case-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";

@IonicPage({
  segment: 'caseDetail'
})
@Component({
  selector: 'page-case-detail',
  templateUrl: './case-detail.html'
})
export class CaseDetailPage extends BaseControllerClass {

  properties: Array<any>;
  items = [];
  photos = [];
  originId;//初始的案例id
  currentId;//当前展现的案例id
  currentIndex = 0;//当前展现的案例序号
  currentPhotoIndex = 0;//当前展示的图片在案例中的序号
  nextId = 0;

  constructor(public navCtrl: NavController, public service: CaseService, public config: Config, public navParams: NavParams, public picservice: PicService,) {
    super(picservice);
    this.nextId = this.currentId = this.originId = this.navParams.get("id");
    console.log(this.navParams);
    console.log(this.currentId);
  }
  backListPage(){
    this.navCtrl.pop();
  }
  directToBaojia(){
    this.navCtrl.push('BaojiaPage');
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
      this.currentId = this.items[this.currentIndex].id;
      this.currentPhotoIndex = this.items[this.currentIndex].listPathMobile.length - 1;
    }
  }

  /**
   * 向后翻
   */
  getNextItem() {
    this.currentPhotoIndex++;
    if (this.currentPhotoIndex >= this.items[this.currentIndex].listPathMobile.length) {
      this.currentIndex++;
      this.currentId = this.items[this.currentIndex].id;
      this.currentPhotoIndex = 0;
    }
  }

  /**
   * 翻到最后一张
   * @param {any} callback 回调函数
   */
  queryNext(callback = null) {
    console.log('query');
    this.service.queryDetail(this.nextId)
      .then(resp => {
        console.log(resp);
        this.items.push(resp.result);
        this.nextId = resp.result.nexCaseId;
        this.photos = this.photos.concat(resp.result.listPathMobile);
        console.log(this.photos);
        if (callback) {
          callback();
        }
      })
      .catch(error => console.log(error));
  }
  // 收藏
  favor(index, caseId){
    let operation = 'ADD';
    if (this.items[index].favor == '10A') {
      operation = "DELETE";
    }
    this.service.doCollect('FOLLOW', operation, caseId)
      .then(data=>{
        console.log(data);
        if(data.success == true){
          if(this.items[index].caseDto.favor == '10A'){
            this.items[index].caseDto.favor = '10B';
          }else{
            this.items[index].caseDto.favor = '10A';
          }
        }else{
          this.navCtrl.push('AccountPage');
        }
      })
      .catch(error => console.log(error));
  }
}
