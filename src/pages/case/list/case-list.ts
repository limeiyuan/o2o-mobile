import {Component, ViewChild} from '@angular/core';
import {App, NavController, IonicPage, NavParams, Config} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import {CaseService} from "../../../providers/case-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";




@IonicPage({
  segment: 'caseList'
})
@Component({
  selector: 'page-case-list',
  templateUrl: './case-list.html'
})
export class CaseListPage extends BaseControllerClass {

  @ViewChild('mySlider') slider: Slides;
  areaList: Array<any>;
  styleList: Array<any>;
  typeList: Array<any>;
  fullScreenList = [];
  halfpackList = [];
  panramaList = [];
  typename: string = 'MULTIIMAGE';
  housetypeName: string = '户型';
  // private selected_segment = 0;
  top_segment = 'top_0';
  segment = 'sites';
  subMenu: string = '';
  rootNavCtrl: NavController;
  loadingText = '加载中';

  typeId: number = undefined;
  styleId: number = undefined;
  areaId: number = undefined;
  activeIndex: number;
  showMode: string;
  activeObj: Object = {
    MULTIIMAGE: {
      type: undefined,
      style: undefined,
      area: undefined,
      pageNo: 1,
      pageCount: 1
    },
    SINGLEIMAGE: {
      type: undefined,
      style: undefined,
      area: undefined,
      pageNo: 1,
      pageCount: 1
    },
    panrama: {
      type: undefined,
      style: undefined,
      area: undefined,
      pageNo: 1,
      pageCount: 1
    }
  };
  scrollAble: {
    MULTIIMAGE: true,
    SINGLEIMAGE: true,
    panrama: true
  };
  // 瀑布流
  img_data = [{
    src: "assets/image/case/dantu/pic-1@3x.png"
  }, {
    src: "assets/image/case/dantu/pic-2@3x.png"
  }, {
    src: "assets/image/case/dantu/pic-3@3x.png"
  }, {
    src: "assets/image/case/dantu/pic-4@3x.png"
  }, {
    src: "assets/image/case/dantu/pic-5@3x.png"
  }, {
    src: "assets/image/case/dantu/pic-6@3x.png"
  }, {
    src: "assets/image/case/dantu/pic-1@3x.png"
  },
  ];

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams, public platform: Platform, public service: CaseService, public picService: PicService, public config: Config) {
    super(picService);

    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.platform = platform;

    for (let i = 0; i < 10; i++) {
      this.data_group.push({
        id: i,
        title: 'Title ' + i,
        details: [{"a": "Lorem"}, {"a": "ipsum"}, {"a": "dolor"}, {"a": "sit"}, {"a": "amet"}],
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
    }
  }

  ionViewWillEnter() {
    this.query();
  }

// 获得案例搜索条件
  queryCondition(subMenu) {
    this.subMenu = subMenu;
    this.service.queryCondition()
      .then(data => {
        // console.log(data);
        this.areaList = data.result.area;
        this.styleList = data.result.style;
        this.typeList = data.result.type;
      })
      .catch(error => console.log(error));
  }

  // 点赞
  good(index, caseId) {
    let operation = 'ADD';
    if (this.fullScreenList[index].goods == '10A') {
      operation = "DELETE";
    }
    this.service.doCollect('POINT', operation, caseId)
      .then(data => {
        console.log(data);
        if (data.success == true) {
          if (this.fullScreenList[index].goods == '10A') {
            this.fullScreenList[index].goodsCount--;
            if (this.fullScreenList[index].goodsCount < 0) {
              this.fullScreenList[index].goodsCount = 0
            }
            this.fullScreenList[index].goods = '10B';
          } else {
            this.fullScreenList[index].goodsCount++;
            this.fullScreenList[index].goods = '10A';
          }
        } else {
          this.navCtrl.push('AccountPage');
        }
      })
      .catch(error => console.log(error));
  }

  // 收藏
  favor(index, caseId) {
    let operation = 'ADD';
    if (this.fullScreenList[index].favor == '10A') {
      operation = "DELETE";
    }
    this.service.doCollect('FOLLOW', operation, caseId)
      .then(data => {
        console.log(data);
        if (data.success == true) {
          if (this.fullScreenList[index].favor == '10A') {
            this.fullScreenList[index].favorCount--;
            if (this.fullScreenList[index].favorCount < 0) {
              this.fullScreenList[index].favorCount = 0
            }
            this.fullScreenList[index].favor = '10B';
          } else {
            this.fullScreenList[index].favorCount++;
            this.fullScreenList[index].favor = '10A';
          }
        } else {
          this.navCtrl.push('AccountPage');
        }
      })
      .catch(error => console.log(error));
  }

// 查询效果图
  query(typeId = undefined, styleId = undefined, areaId = undefined, typename = this.typename, callback = null) {
    // 当前点击
    let target;
    if (typeId !== undefined) {
      target = 'type';
      this.activeObj[this.typename][target] = typeId;
      if (typeId === 0) {
        this.activeObj[this.typename][target] = undefined;
      }
    }
    if (styleId !== undefined) {
      target = 'style';
      this.activeObj[this.typename][target] = styleId;
      if (styleId === 0) {
        this.activeObj[this.typename][target] = undefined;
      }
    }
    if (areaId !== undefined) {
      target = 'area';
      this.activeObj[this.typename][target] = areaId;
      if (areaId === 0) {
        this.activeObj[this.typename][target] = undefined;
      }
    }

    let params = this.activeObj[this.typename];
    params.pageNo = 1;
    this.service.query(params.pageNo, undefined, params.style, params.type, params.area, this.typename)
      .then(data => {
        console.log(data);
        this.activeObj[this.typename].pageCount = data.pagination.pageCount;
        if (this.typename == 'MULTIIMAGE') {
          this.fullScreenList = data.result;
          // this.fullScreenList = this.fullScreenList.concat(data.result);
          if (callback) {
            callback();
          }
          // if(this.fullScreenList.length == 0){
          //   debugger;
          //   this.showMode = 'noneFullScreen';
          // }else{
          //   debugger;
          //   this.showMode = 'haveFullScreen';
          // }
        } else if (this.typename == 'SINGLEIMAGE') {
          this.halfpackList = this.halfpackList.concat(data.result);
          if (callback) {
            callback();
          }
        } else if (this.typename == 'panrama') {
          this.panramaList = this.panramaList.concat(data.result);
          if (callback) {
            callback();
          }
        }
        this.subMenu = '';
      })
      .catch(error => console.log(error));
  }

  derectToDetail(property: any) {
    this.appCtrl.getRootNav().push('CaseDetailPage', property);
  }

  //下拉刷新整个页面
  doRefresh(refresh, $event: Event) {
    this.activeObj[this.typename].pageNo = 1;
    this.fullScreenList = [];
    this.halfpackList = [];
    this.panramaList = [];
    this.query(undefined, undefined, undefined, undefined, function () {
      refresh.complete();
    });
  }

  //上拉加载更多
  doInfinite(infiniteScroll, $event: Event) {
    // if(!this.scrollAble[this.typename]) {
    // return
    // }
    let params = this.activeObj[this.typename];
    if (params.pageNo >= params.pageCount) {
      console.log('end');
      this.loadingText = '别滑了，没有了';
      setTimeout(function(){
        infiniteScroll.complete();
      },1000);
      return;
    }
    params.pageNo++;
    this.service.query(params.pageNo, undefined, params.style, params.type, params.area, this.typename)
      .then(data => {
        console.log(data);

        if (this.typename == 'MULTIIMAGE') {
          this.fullScreenList = this.fullScreenList.concat(data.result);
          infiniteScroll.complete();
          // if(this.fullScreenList.length == 0){
          //   debugger;
          //   this.showMode = 'noneFullScreen';
          // }else{
          //   debugger;
          //   this.showMode = 'haveFullScreen';
          // }
        } else if (this.typename == 'SINGLEIMAGE') {
          this.halfpackList = this.halfpackList.concat(data.result);
          infiniteScroll.complete();
        } else if (this.typename == 'panrama') {
          this.panramaList = this.panramaList.concat(data.result);
          infiniteScroll.complete();
        }
        this.subMenu = '';
      })
      .catch(error => console.log(error));
  }


  data_group: Array<{id: number, title: string, details: any, icon: string, showDetails: boolean}> = [];

  select(index) {
    if (index === 2) {
      this.top_segment = 'top_2';
    }
    if (index === 1) {
      this.top_segment = 'top_1';
    }
    if (index === 0) {
      this.top_segment = 'top_0';
    }
    this.slider.slideTo(index, 500);
  }


  onSlideChanged($event) {
    let currentIndex = this.slider.getActiveIndex();
    console.log(currentIndex);
    if (currentIndex === 2) {
      this.top_segment = 'top_2';
      this.typename = 'panrama';
      var params = this.activeObj[this.typename];
      this.service.query(params.pageNo, undefined, params.style, params.type, params.area, 'panrama')
        .then(data => {
          // debugger;
          console.log(data);
          this.panramaList = this.panramaList.concat(data.result);
          this.subMenu = '';
        })
        .catch(error => console.log(error));
    }
    if (currentIndex === 1) {
      this.top_segment = 'top_1';
      this.typename = 'SINGLEIMAGE';
      var params = this.activeObj[this.typename];
      this.service.query(params.pageNo, undefined, params.style, params.type, params.area, 'SINGLEIMAGE')
        .then(data => {
          console.log(data);
          this.halfpackList = this.halfpackList.concat(data.result);
          this.subMenu = '';
        })
        .catch(error => console.log(error));
    }
    if (currentIndex === 0) {
      this.top_segment = 'top_0';
      this.typename = 'MULTIIMAGE';
      var params = this.activeObj[this.typename];
      this.service.query(params.pageNo, undefined, params.style, params.type, params.area, 'MULTIIMAGE')
        .then(data => {
          console.log(data);
          // this.fullScreenList = this.fullScreenList.concat(data.result);
          this.fullScreenList = data.result;
          this.subMenu = '';
        })
        .catch(error => console.log(error));
    }
  }

  panEvent(e) {
    let currentIndex = this.slider.getActiveIndex();
    this.top_segment = `top_${currentIndex}`
  }


// 瀑布流
  ionViewDidEnter() {
    setTimeout(() => {
      this.getNode();
    }, 3000)
  }

  getNode() {
    let parentNode = document.getElementById("boxWrap");
    let childNodeArray: any = parentNode.getElementsByClassName("box");
    let screenWidth = document.documentElement.clientWidth;
    // let childWidth = childNodeArray[0].offsetWidth;
    let childWidth = 172.5;
    let num = Math.floor(screenWidth / childWidth); //获得一排摆的个数 用Math.floor()转换为整数
    // parentNode.style.cssText = "width:" + (childWidth * num + 2) + "px;"; //固定container的宽并设置居中
    this.setImagePosition(num, childNodeArray);
  }

  setImagePosition(num, childArray) {
    var imgHeightArray = [];//定义数组用于存放所有图片的高度
    for (var i = 0; i < childArray.length; i++) { //遍历所有图片
      if (i < num) {
        console.log(i, childArray[i].offsetHeight);
        imgHeightArray[i] = childArray[i].offsetHeight; //取得第一排图片的高度
      } else {
        var minHeight = Math.min.apply(null, imgHeightArray); //获取第一排图片中高度最小的图片
        var minIndex = this.getMinHeight(imgHeightArray, minHeight); //函数获得高度最小的图片的位置
        console.log('minIndex', minIndex);
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
//   doInfinite(infiniteScroll) {
//     let parentNode = document.getElementById("container");
//     for (var i = 0; i < this.img_data.length; i++) {
//       let divNode = document.createElement("div"); //创建div节点
//       divNode.className = "box";//为节点添加box类名
//       parentNode.appendChild(divNode);//添加根元素
//       let subDivNode = document.createElement("div");//创建节点
//       subDivNode.className = "box_img";//为节点添加类名
//       divNode.appendChild(subDivNode);//添加根元素
//       var img = document.createElement("img");//创建节点
//       img.src = this.img_data[i].src;//图片加载路径
//       subDivNode.appendChild(img);//添加根元素
//     }
//     this.getNode();
//     setTimeout(() => { infiniteScroll.complete() }, 1000);
//   }
}
