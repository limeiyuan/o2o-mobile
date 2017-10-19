import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";


let baseUrl = SERVER_URL;

@Injectable()
export class accountService {

  constructor(public http: Http) {
  }
  sendCode(tel:string) {
    return this.http.get(baseUrl + 'base/validateCode.htm', {
      params: {
        tel:tel,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  doRegister(username:string,password:string,signature:string) {
    return this.http.get(baseUrl + 'register.htm',{
      params: {
        username:username,
        password:password,
        signature:signature,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
}
