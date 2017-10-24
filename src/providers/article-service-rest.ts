import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";

let baseUrl = SERVER_URL;

@Injectable()
export class ArticleService {
  pageSize = 5;

  constructor(public http: Http) {
  }
  // 装修攻略
  queryIndex() {
    return this.http.get(baseUrl + 'article/queryAll.htm')
      .map(res => res.json())
      .toPromise();
  }
  // 文章详情
  articleDetail(id){
    return this.http.get(baseUrl + 'article/queryArticle.action',{
      params: {
        id:id
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 相关阅读
  relativeRisk(pageNo, pageSize=null, id){
    if(pageSize==null){
      pageSize = this.pageSize;
    }
    return this.http.get(baseUrl + 'article/query.action',{
      params: {
        pageNo: pageNo,
        pageSize: pageSize,
        kind_id: 83,
        id:id
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 分类查询文章
  classifyArticle(pageNo, pageSize=null, parentId){
    if(pageSize==null){
      pageSize = 10;
    }
    return this.http.get(baseUrl + 'article/query.action',{
      params: {
        pageNo: pageNo,
        pageSize: pageSize,
        parentId: parentId,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
}
