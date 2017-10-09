import {PicService} from "./pic-service-rest";

export abstract class BaseControllerClass {

  constructor(public picService: PicService) {
  }

  getPicture(path) {
    return this.picService.getPicture(path);
  }

  getPhoto(path, width, height) {
    return this.picService.getPhoto(path, width, height);
  }
}
