import { Component } from '@angular/core';
import {NavController, IonicPage, Config} from 'ionic-angular';
import {favorService} from "../../../providers/favor-service-rest";
import {BaseControllerClass} from "../../../providers/base-controller";
import {PicService} from "../../../providers/pic-service-rest";

@IonicPage({
  segment:'SelfFavorPanoramaPage'
})
@Component({
  selector: 'page-self-favor-panorama',
  templateUrl: './self-favor-panorama.html'
})
export class SelfFavorPanoramaPage extends BaseControllerClass{
  pageNo : Number = 0;
  panramaList = [];
  currentPageNo = 0;


  constructor(public navCtrl: NavController, public service: favorService, public picService: PicService, public config: Config) {
    super(picService);
    this.queryCase();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  queryCase(callback = null){
    this.service.queryCase(this.pageNo,undefined, 'panorama')
      .then(data =>{
        console.log(data);
        this.panramaList = this.panramaList.concat(data.result);
        if (callback) {
          callback();
        }
      })
      .catch(error => console.log(error));
  }
  // 下拉刷新
  doRefresh(refresh, $event: Event) {
    this.currentPageNo = 0;
    this.panramaList = [];
    this.queryCase(function () {
      refresh.complete();
    });
  }
  // 上拉加载
  doInfinite(infiniteScroll, $event: Event) {
    this.queryCase(function () {
      infiniteScroll.complete();
    })
  }
}


// import { Component } from '@angular/core';
// import { NavController, NavParams, PopoverController } from 'ionic-angular';
// import { DomSanitizer } from "@angular/platform-browser";
// // import { BrowserPopoverPage } from "./browser-popover";
//
// @Component({
//   selector: 'page-browser',
//   templateUrl: 'browser.html'
// })
// export class SelfFavorPanoramaPage {
//   browser: any = {
//     isLoaded: false, // 网页是否被加载
//     proObj: null, // 进度条对象
//     progress: 0, // 网页访问的进度条
//     secUrl: '', // 安全链接
//
//     title: '加载中',
//     url: '',
//     share: null // 是否具有分享功能（传递一个分享对象ShareModel过来）
//   };
//
//   shareConfig: any = {
//     isShow: false
//   }; // 分享控制的配置
//   constructor(public navCtrl: NavController,
//               private params: NavParams,
//               private sanitizer: DomSanitizer,
//               private popoverCtrl: PopoverController) {
//     let browser = this.params.get('browser');
//     if(browser) {
//       this.browser.title = browser.title;
//       this.browser.url = browser.url;
//       this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser.url);
//
//       if(browser.share) {
//         this.browser.share = browser.share;
//       }
//
//     } else {
//       this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.browser.url);
//     }
//     this.reload();
//   }
//
//   ionViewDidLoad() {
//     if(!this.browser.proObj) {
//       this.browser.proObj = document.getElementById('progress');
//     }
//     this.onprogress();
//   }
//   // 生成随机数
//   private random(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//
//   // 网页访问进度
//   private onprogress() {
//     // 随机时间
//     let timeout = this.random(10, 30);
//
//     let timer = setTimeout(() => {
//       if(this.browser.isLoaded) {
//         this.browser.proObj.style.width = '100%';
//         clearTimeout(timer);
//         return;
//       }
//
//       // 随机进度
//       this.browser.progress += this.random(1, 5);
//
//       // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
//       if(this.browser.progress > 90){
//         this.browser.progress = 90;
//       }
//       this.browser.proObj.style.width = this.browser.progress + '%';
//       this.onprogress();
//     }, timeout);
//   }
//
//   // 如果iframe页面加载成功后
//   loaded() {
//     this.browser.isLoaded = true;
//   }
//
//   // 显示Popver选项
//   presentPopover(myEvent) {
//     let cb = {
//       refresh: () => {
//         this.reload();
//       },
//       close: () => {
//         this.navCtrl.pop();
//       },
//       share: null
//     };
//
//     if(this.browser.share) {
//       cb.share = () => {
//         this.share();
//       }
//     }
//     let popover = this.popoverCtrl.create(SelfFavorPanoramaPage, {
//       callback: cb
//     });
//     popover.present({
//       ev: myEvent
//     });
//   }
//
//   // 重新加载页面
//   reload() {
//     let title = this.browser.title;
//     let url = this.browser.secUrl;
//     this.browser.title = '加载中';
//     this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
//
//     setTimeout(() => {
//       this.browser.isLoaded = false;
//       this.browser.progress = 0;
//       if(!this.browser.proObj) {
//         this.browser.proObj = document.getElementById('progress');
//       }
//       this.onprogress();
//       this.browser.title = title;
//       this.browser.secUrl = url;
//     }, 10);
//   }
//   // 分享页面（作为popover的回调）
//   share() {
//     this.shareConfig.isShow = true;
//     /*if(this.browser.share) {
//      SocialSharing.share(this.browser.share.title, this.browser.share.content, '', this.browser.share.url).then(() => {
//
//      }, (err) => {
//      // Error!
//      alert('错误：分享失败！' + err);
//      });
//      }*/
//   }
// }
