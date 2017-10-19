import {Component, ViewChild} from '@angular/core';
import {NavController, IonicPage, NavParams} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import {CaseService} from "../../../providers/case-service-rest";



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
  subMenu: string = '';
  subMenuTwo: string = '';
  subMenuThree: string = '';

  rootNavCtrl: NavController;

  // 瀑布流
  img_data = [{
    src: "assets/image/case/dantu/pic-1@3x.png"
  }, {
    src: "assets/image/case/dantu/pic-2@3x.png"
  }, {
    src: "assets/image/case/dantu/pic-3@3x.png"
  }, {
    src: "assets/image/case/dantu/pic-4@3x.png"
  },{
    src: "assets/image/case/dantu/pic-5@3x.png"
  },{
      src: "assets/image/case/dantu/pic-6@3x.png"
  },{
    src: "assets/image/case/dantu/pic-1@3x.png"
  },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public service: CaseService) {
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
// 获得案例搜索条件
  queryCondition(subMenu){
      this.subMenu = subMenu;
    this.service.queryCondition()
      .then(data=>{
        console.log(data);
        // this.areaList = data.result.AREA.list;
        // this.styleList = data.result.STYLE.list;
        // this.areaList = data.result.AREA;
      })
      .catch(error => console.log(error));
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
    let currentIndex = this.slider.getActiveIndex();
    console.log(currentIndex)
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

  panEvent(e)
  {
    let currentIndex = this.slider.getActiveIndex();
    console.log(currentIndex)
    this.top_segment = `top_${currentIndex}`
  }
  // queryCondition(subMenu){
  //   this.subMenu = subMenu
  // }
  // showSubMenuTwo(subMenuTwo){
  //   this.subMenuTwo = subMenuTwo
  // }
  // showSubMenuThree(subMenuThree){
  //   this.subMenuThree = subMenuThree
  // }

// 瀑布流
  ionViewDidEnter() {
    // setTimeout(()=>{
      this.getNode();
    // }, 3000)
  }
  getNode() {
    let parentNode = document.getElementById("boxWrap");
    let childNodeArray: any = parentNode.getElementsByClassName("box");
    let screenWidth = document.documentElement.clientWidth;
    let childWidth = childNodeArray[0].offsetWidth;
    let num = Math.floor(screenWidth / childWidth); //获得一排摆的个数 用Math.floor()转换为整数
    // parentNode.style.cssText = "width:" + (childWidth * num + 2) + "px;"; //固定container的宽并设置居中
    this.setImagePosition(num, childNodeArray);
  }
  setImagePosition(num, childArray) {
    var imgHeightArray = [];//定义数组用于存放所有图片的高度
    for (var i = 0; i < childArray.length; i++) { //遍历所有图片
      if (i < num) {
        console.log(i, childArray[i].offsetHeight)
        imgHeightArray[i] = childArray[i].offsetHeight; //取得第一排图片的高度
      } else {
        var minHeight = Math.min.apply(null, imgHeightArray); //获取第一排图片中高度最小的图片
        var minIndex = this.getMinHeight(imgHeightArray, minHeight); //函数获得高度最小的图片的位置
        console.log('minIndex', minIndex)
        childArray[i].style.position = "absolute"; //绝对定位图片
        childArray[i].style.top = minHeight + "px"; //图片距顶部像素
        childArray[i].style.left = childArray[minIndex].offsetLeft + "px"; //图片距左的像素
        imgHeightArray[minIndex] = imgHeightArray[minIndex] + childArray[i].offsetHeight; //将最低高度的box的高度加上它下方的box高度
      }
    }
  }

  getMinHeight(imgHeightArray, minHeight) {
    for (var i in imgHeightArray) {
      if (imgHeightArray[i] == minHeight) { //循环所有数组的高度 让它等于最小图片的高度 返回i值
        return i;
      }
    }
  }
//这里是借助ionic的上拉加载代替网页的滚动监听实现加载更多
  doInfinite(infiniteScroll) {
    let parentNode = document.getElementById("container");
    for (var i = 0; i < this.img_data.length; i++) {
      let divNode = document.createElement("div"); //创建div节点
      divNode.className = "box";//为节点添加box类名
      parentNode.appendChild(divNode);//添加根元素
      let subDivNode = document.createElement("div");//创建节点
      subDivNode.className = "box_img";//为节点添加类名
      divNode.appendChild(subDivNode);//添加根元素
      var img = document.createElement("img");//创建节点
      img.src = this.img_data[i].src;//图片加载路径
      subDivNode.appendChild(img);//添加根元素
    }
    this.getNode();
    setTimeout(() => { infiniteScroll.complete() }, 1000);
  }
}
