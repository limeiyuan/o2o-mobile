import { Component,ViewChild } from '@angular/core';
import {NavController,Content, IonicPage} from 'ionic-angular';
import {CityService} from "../../../providers/city-service-rest";
import {settingService} from "../../../providers/setting-service-rest";

@IonicPage({
  segment:'selfChangeCity'
})
@Component({
  selector: 'page-self-changeCity',
  templateUrl: './self-changeCity.html'
})
export class SelfChangeCityPage {
  @ViewChild(Content) content: Content;
  searchEmptyShow = false;//是否显示清除输入的图标
  showMiddle = false;//是否在屏幕中央显示选中的字母索引
  hIndex=(window.screen.height-44-4)/26;//右边侧边栏每个字母的高度，是屏幕高度减去标题栏的44，减去页面样式中的margin-top:2px，margin-bottom:2px,再除以26，这样以保证在各个手机屏幕上的字母的距离的均等性
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  indexs= [];
  cityName = '';
  cityDatas = [];
  constructor(public navCtrl: NavController, public service: CityService, public service1: settingService) {
    this.loadData();

  }
  scrollToHot() {
    let element = document.getElementById(`cityHot`);
    this.content.scrollTo(0, element.offsetTop, 500);
  }
  scrollToTop(letter) {
    let element = document.getElementById(`city${letter}`);
    this.content.scrollTo(0, element.offsetTop, 500);
  }
  directToEditData(){
    this.navCtrl.push('SelfEditDataPage');
  }
  backListPage(){
    this.navCtrl.pop();
  }

  loadData(){//从本地的一个包含全国各城市的json文件中加载数据
    this.service.loadData()
      .then(data=>{
        console.log(data);
        this.cityDatas=data;
      })
      .catch(error => console.log(error));
  }
  // 城市选择
  save(shiId) {
    this.service1.settingData(undefined, undefined, undefined, shiId)
      .then(data => {
        console.log(data);
        if(data.success == true){
          this.navCtrl.push('SelfEditDataPage');
        }
      })
      .catch(error => console.log(error));
  }
}
