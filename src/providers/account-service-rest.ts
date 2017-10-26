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
  doRegister(username:string,password:string,type:string,signature:string) {
    return this.http.get(baseUrl + 'designer/register.htm',{
      params: {
        username:username,
        password:password,
        type:type,
        signature:signature,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 登录
  doLogin(username:string,password:string){
    return this.http.get(baseUrl + 'user/login.htm',{
      params: {
        username:username,
        password:password,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
}
