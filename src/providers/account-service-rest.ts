import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";
import Qs from 'qs'

let baseUrl = SERVER_URL;

@Injectable()
export class accountService {

  constructor(public http: Http) {
  }
  sendCode(tel:string) {
    let body = Qs.stringify({ tel:tel}),
      headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
      options = new RequestOptions({headers: headers});
    return this.http.post(baseUrl + 'base/validateCode.htm', body, options)
      .map(res => res.json())
      .toPromise();
  }
  // 注册
  doRegister(username:string,password:string,type:string,signature:string) {
    let body = Qs.stringify({ username: username, password: password,type: type, signature: signature}),
      headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
      options = new RequestOptions({headers: headers});
    return this.http.post(baseUrl + 'designer/register.htm', body, options)
      .map(res => res.json())
      .toPromise();
  }
  // 登录
  doLogin(username:string,password:string) {
    let body = Qs.stringify({ username: username, password: password }),
      headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
      options = new RequestOptions({headers: headers});
    return this.http.post(baseUrl + 'user/login.htm', body, options)
      .map(res => res.json())
      .toPromise();
  }
  // 忘记密码
  forgetPassword(username:string,newPassword:string,signature:string) {
    let body = Qs.stringify({ username: username, newPassword: newPassword, signature: signature}),
      headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
      options = new RequestOptions({headers: headers});
    return this.http.post(baseUrl + 'user/resetPassword.htm', body, options)
      .map(res => res.json())
      .toPromise();
  }
}
