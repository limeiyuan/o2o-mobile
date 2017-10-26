import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";


let baseUrl = SERVER_URL;

@Injectable()
export class favorService {
  pageSize = 10;

  constructor(public http: Http) {
  }
  queryCase(pageNo, pageSize = null, type) {
    if (pageSize == null) {
      pageSize = this.pageSize;
    }
    return this.http.get(baseUrl + 'favor/query.htm', {
      params: {
        pageNo: pageNo,
        pageSize: pageSize,
        type: type
      }
    })
      .map(res => res.json())
      .toPromise();
  }

}
