import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";

let baseUrl = SERVER_URL + 'case/';

@Injectable()
export class DemoService {

  pageSize = 10;

  constructor(public http: Http) {
  }

  findAll() {
    return this.http.get(baseUrl + 'query.htm')
      .map(res => res.json())
      .toPromise();
  }

  query(pageNo, pageSize = null) {
    if (pageSize == null) {
      pageSize = this.pageSize;
    }
    return this.http.get(baseUrl + 'query.htm', {
      params: {
        pageSize: pageSize,
        pageNo: pageNo
      }
    })
      .map(res => res.json())
      .toPromise();
  }

}