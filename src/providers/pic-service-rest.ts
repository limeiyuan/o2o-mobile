import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {FILE_SERVER_URL} from "./config";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PicService {

  constructor(public http: Http) {
  }

  getPicture(path) {
    return FILE_SERVER_URL + 'getPhoto/' + path;
  }

  getPhoto(path, width, height) {
    return FILE_SERVER_URL + 'photo/getByPath.htm?path=' + path + '&width=' + width + '&height=' + height;
  }
}
