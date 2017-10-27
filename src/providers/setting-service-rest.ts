import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";


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
  // 修改密码
  changePassword(password:string,newPassword:string) {
    return this.http.get(baseUrl + 'user/changePassword.htm',{
      params: {
        password:password,
        newPassword:newPassword,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
}
