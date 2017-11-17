import { Component} from '@angular/core';
import {NavController, IonicPage, Platform, ActionSheetController, NavParams} from 'ionic-angular';
import {settingService} from "../../../providers/setting-service-rest";
// import { Camera, CameraOptions } from '@ionic-native/camera';
// import { Camera, ImagePicker, Transfer } from "@ionic-native/image-picker";
import { Camera } from 'ionic-native';
@IonicPage({
  segment:'selfEditData'
})
@Component({
  selector: 'page-self-editData',
  templateUrl: './self-editData.html'
})
export class SelfEditDataPage {
  editData: Object;
  public path;
  /*profilePicture: any = "https://www.gravatar.com/avatar/";*/
  //给image设置默认的图片
  profilePicture: any = "assets/img/live.jpg";

  constructor(public navCtrl: NavController, public NavParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController, public service: settingService,) {
    this.queryData();
  }

  directToChangeEmail() {
    let _self = this;
    let demo = function (email) {
      return new Promise((resolve) => {
        _self.editData['email'] = email;
        resolve();
      })
    };
    this.navCtrl.push('SelfChangeEmailPage', {email: this.editData['email'], callback: demo});
  }

  directToChangeNickname() {
    let _self = this;
    let demo = function (nickname) {
      return new Promise((resolve) => {
        _self.editData['nickname'] = nickname;
        resolve();
      })
    };
    this.navCtrl.push('SelfChangeNicknamePage', {nickname: this.editData['nickname'], callback: demo});
  }

  directToChangeGender(value) {
    this.navCtrl.push('SelfGenderPage', {value: value});
  }

  directToChangePassword() {
    this.navCtrl.push('SelfChangePasswordPage');
  }

  directToChangeCity() {
    let demo = function () {
      return new Promise((resolve) => {
        resolve();
      });
    };
    this.navCtrl.push('SelfChangeCityPage',{callback: demo});
  }

  backListPage() {
    this.navCtrl.pop();
  }

  changePortrait() {
    // debugger;
    let actionSheet = this.actionsheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            // this.getPhoto();
            console.log('拍照 clicked');
            var options = {
              // Some common settings are 20, 50, and 100
              quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              encodingType: Camera.EncodingType.JPEG,
              mediaType: Camera.MediaType.PICTURE,
              saveToPhotoAlbum: true,
              sourceType: Camera.PictureSourceType.CAMERA,//拍照时，此参数必须有，否则拍照之后报错，照片不能保存
              correctOrientation: true  //Corrects Android orientation quirks
            }
            /**
             * imageData就是照片的路径
             */
            Camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              let base64Image = imageData;
              this.path = base64Image;//给全局的文件路径赋值。
              this.profilePicture = base64Image;//给image设置source。
              alert('true');
              alert(this.path);
              /*  this.zone.run(() => this.image = base64Image);*/
            }, (err) => {
              // Handle error，出错后，在此打印出错的信息。
              alert('err');
              alert(err.toString());
            });
          }
        }, {
          text: '相册',
          handler: () => {
            // this.getImage();
            console.log('相册 clicked');
            var options = {
              quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 0,//0对应的值为PHOTOLIBRARY ，即打开相册
              encodingType: Camera.EncodingType.JPEG,
              mediaType: Camera.MediaType.PICTURE,
              allowEdit: true,
              correctOrientation: true  //Corrects Android orientation quirks
            };
            debugger;
            Camera.getPicture(options).then((imageData) => {
              debugger;
              let base64Image = imageData;
              this.path = base64Image;
              this.profilePicture = base64Image;
              alert(base64Image);
            }, (err) => {
              // Handle error
            });
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消 clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // 回显资料
  queryData() {
    this.service.queryData()
      .then(data => {
        console.log(data);
        this.editData = data.result;
      })
      .catch(error => console.log(error));
  }
}
