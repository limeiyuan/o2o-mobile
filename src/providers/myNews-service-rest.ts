import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";


let baseUrl = SERVER_URL;

@Injectable()
export class myNewsService{

  constructor(public http: Http) {
  }
  queryNews() {
    return this.http.get(baseUrl + 'message/queryUserMessage.action')
      .map(res => res.json())
      .toPromise();
  }
  // 删除消息
  deleteNews(id) {
    return this.http.get(baseUrl + 'message/deleteMessage.action',{
      params:{
        id: id
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 查看消息
  readNews(id) {
    return this.http.get(baseUrl + 'message/setReadStatus.action',{
      params:{
        id: id
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 全部标记已读
  allReadNews() {
    return this.http.get(baseUrl + 'message/setReadStatus.action',{
      params:{
        type: '10A'
      }
    })
      .map(res => res.json())
      .toPromise();
  }
}
