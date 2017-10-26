import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";

let baseUrl = SERVER_URL;

@Injectable()
export class myDesignService{
  pageSize = 10;

  constructor(public http: Http) {
  }
  // 云设计列表
  queryDesign(pageNo, pageSize = null) {
    if (pageSize == null) {
      pageSize = this.pageSize;
    }
    return this.http.get(baseUrl + 'yunDesigner/query.htm', {
      params: {
        pageSize: pageSize,
        pageNo: pageNo,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 云设计详情
  queryDesignDetail(id) {
    return this.http.get(baseUrl + 'yunDesigner/queryByYunDesigner.htm', {
      params: {
        id: id,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 编辑设计理念
  editDesignIdea(yunId, detailId, content) {
    if(detailId == undefined){
      return this.http.get(baseUrl + 'yunDesigner/insertContent.htm', {
        params: {
          yunId: yunId,
          content: content
        }
      })
        .map(res => res.json())
        .toPromise();
    }else{
      return this.http.get(baseUrl + 'yunDesigner/insertContent.htm', {
        params: {
          detailId: detailId,
          content: content
        }
      })
        .map(res => res.json())
        .toPromise();
    }
    }
}
