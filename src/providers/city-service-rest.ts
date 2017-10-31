import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";


let baseUrl = SERVER_URL;

@Injectable()
export class CityService {

  constructor(public http: Http) {
  }
  loadData() {
    return this.http.get('../assets/city.json')
      .map(res => res.json())
      .toPromise();
  }
}
