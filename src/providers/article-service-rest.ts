import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";

let baseUrl = SERVER_URL;

@Injectable()
export class ArticleService {


  constructor(public http: Http) {
  }

  queryIndex() {
    return this.http.get(baseUrl + 'article/query.action')
      .map(res => res.json())
      .toPromise();
  }
}
