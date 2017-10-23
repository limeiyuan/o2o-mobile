import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";

let baseUrl = SERVER_URL;

@Injectable()
export class DesignerService {

  pageSize = 10;

  constructor(public http: Http) {
  }

  findAll() {
    return this.http.get(baseUrl + 'query.htm')
      .map(res => res.json())
      .toPromise();
  }
  // 设计师列表查询
  query(pageNo, pageSize = null) {
    if (pageSize == null) {
      pageSize = this.pageSize;
    }
    return this.http.get(baseUrl + 'designer/selectDisigner.htm', {
      params: {
        pageSize: pageSize,
        pageNo: pageNo,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 设计师详情-资料
  querydata(id) {
    return this.http.get(baseUrl + 'user/selectDesigner.htm', {
      params: {
       id:id
      }
    })
      .map(res => res.json())
      .toPromise();
  }

}
