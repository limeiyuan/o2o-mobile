import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";

let baseUrl = SERVER_URL;

@Injectable()
export class DesignerService {

  pageSize = 10;

  constructor(public http: Http) {
  }

  // 设计师列表查询
  query(pageNo, pageSize = null) {
    if (pageSize == null) {
      pageSize = this.pageSize;
    }
    return this.http.get(baseUrl + 'designer/selectDisigner.htm', {
      params: {
        pageSize: pageSize,
        pageNo: pageNo,
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 报价预约
  makeAppointment(description, tel, address, name, gender) {
    return this.http.get(baseUrl + 'request/save.htm',{
      params: {
        description: description,
        tel: tel,
        address: address,
        name:name,
        gender:gender
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 设计师预约
  makeAppointmentDesigner(description, designerId, phone, address, applicant, gender) {
    return this.http.get(baseUrl + 'designer/subscribeDesigner.action',{
      params: {
        description: description,
        designerId: designerId,
        phone: phone,
        address: address,
        applicant:applicant,
        gender:gender
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 设计师详情-资料
  querydata(id) {
    return this.http.get(baseUrl + 'user/selectDesigner.htm', {
      params: {
       id:id
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 设计师全景图列表查询
  queryPanorama(pageNo, pageSize = null, id) {
    if (pageSize == null) {
      pageSize = this.pageSize;
    }
    return this.http.get(baseUrl + 'designer/selectMyDesignertCaseByPanorama.htm', {
      params: {
        pageSize: pageSize,
        pageNo: pageNo,
        id: id
      }
    })
      .map(res => res.json())
      .toPromise();
  }
  // 设计师案例列表查询
  queryCase(pageNo, pageSize = null, id) {
    if (pageSize == null) {
      pageSize = this.pageSize;
    }
    return this.http.get(baseUrl + 'designer/selectDesignerCase.htm', {
      params: {
        pageSize: pageSize,
        pageNo: pageNo,
        id: id
      }
    })
      .map(res => res.json())
      .toPromise();
  }

}
