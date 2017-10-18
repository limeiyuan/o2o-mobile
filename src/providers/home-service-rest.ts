import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";

let baseUrl = SERVER_URL + 'homepage/';

@Injectable()
export class HomeService {

  constructor(public http: Http) {
  }

  query() {
    return this.http.get(baseUrl + 'queryIndex.htm')
      .map(res => res.json())
      .toPromise();
  }
}
