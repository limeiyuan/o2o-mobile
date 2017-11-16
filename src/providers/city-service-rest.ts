import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";



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
