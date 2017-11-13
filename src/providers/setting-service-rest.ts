import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";
import Qs from 'qs'


let baseUrl = SERVER_URL;

@Injectable()
export class settingService {
  constructor(public http: Http) {
  }
  // 资料回显
  queryData() {
    return this.http.get(baseUrl + 'user/queryDetail.htm')
      .map(res => res.json())
      .toPromise();
  }
  // 编辑资料
  settingData(nickName:string,gender:string,email:string,xian:string) {
    return this.http.get(baseUrl + 'user/updateDetail.htm',{
      params: {
        nickName:nickName,
        gender:gender,
        email:email,
        xian:xian,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 忘记密码
  changePassword(password:string,newPassword:string) {
    let body = Qs.stringify({ password:password, newPassword: newPassword}),
      headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
      options = new RequestOptions({headers: headers});
    return this.http.post(baseUrl + 'user/changePassword.htm', body, options)
      .map(res => res.json())
      .toPromise();
  }
}
