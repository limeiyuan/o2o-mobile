import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";

let baseUrl = SERVER_URL + 'case/';

@Injectable()
export class CaseService {

  pageSize = 10;

  constructor(public http: Http) {
  }

  findAll() {
    return this.http.get(baseUrl + 'query.htm')
      .map(res => res.json())
      .toPromise();
  }
  // 获得案例搜索条件
  queryCondition() {
    return this.http.get(baseUrl + 'selectBydict.htm')
      .map(res => res.json())
      .toPromise();
  }
  // 效果图查询
  query(pageNo, pageSize = null, style_id = undefined, type_id = undefined, area_id = undefined, type = undefined) {
    if (pageSize == null) {
      pageSize = this.pageSize;
    }
    return this.http.get(baseUrl + 'query.action', {
      params: {
        pageSize: pageSize,
        pageNo: pageNo,
        style_id: style_id,
        type_id: type_id,
        area_id: area_id,
        type: type,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 点赞/收藏
  doCollect(operateType, operation, caseId) {
    return this.http.get(baseUrl + 'pointAndFollow.action',{
      params: {
        operateType: operateType,
        operation: operation,
        caseId: caseId,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 案例详情
  queryDetail(id) {
    return this.http.get(baseUrl + 'queryCaseDto.action',
      {
        params:
          {
            id: id
          }
      })
      .map(res => res.json())
      .toPromise();
  }
}
