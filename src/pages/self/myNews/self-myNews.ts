import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import {myNewsService} from "../../../providers/myNews-service-rest";

@IonicPage({
  segment:'selfMyNews'
})
@Component({
  selector: 'page-self-MyNews',
  templateUrl: './self-MyNews.html'
})
export class SelfMyNewsPage {
  viewMode: string = "systemMessage";
  myNewsList: Array<any>;
  item:string;
  showMode:string;
  constructor(public navCtrl: NavController, public service: myNewsService) {
    this.queryNews();
  }
  backListPage(){
    this.navCtrl.pop();
  }
  // 消息列表查询
  queryNews() {
    this.service.queryNews()
      .then(data => {
        console.log(data);
        this.myNewsList = data.result;
        if(this.myNewsList.length == 0){
          this.showMode = 'noneMessage';
        }else{
          this.showMode = 'haveMessage';
        }
      })
      .catch(error => console.log(error));
  }
  // 删除消息
  removeItem(id) {
    this.service.deleteNews(id)
      .then(data => {
        console.log(data);
        if(data.success == true){
          this.queryNews();
        }
      })
      .catch(error => console.log(error));
  }
  // 进入消息
  directToNewsDeatil(id, content){
    this.navCtrl.push('SelfMyNewsDetailPage',{id:id, content:content});
    this.service.readNews(id)
      .then(data => {
        console.log(data);
        this.queryNews();
      })
      .catch(error => console.log(error));
  }
  // 全部已读
  allReadNews(){
    this.service.allReadNews()
      .then(data => {
        console.log(data);
        this.queryNews();
      })
      .catch(error => console.log(error));
  }
}
