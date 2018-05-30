import { Component } from '@angular/core';
import {NavController, normalizeURL, Platform} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {File} from "@ionic-native/file";
import {PhotoDetailsPage} from "../photo-details/photo-details";
import {PhotoProvider} from "../../providers/photo/photo";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  photos: string[];

  constructor(public navCtrl: NavController, public camera: Camera, public file: File, public photoProv: PhotoProvider, public platform: Platform) {
    this.platform.ready().then( result => {
        this.updatePhotos();
      });

  }

  openCam() {
    this.getPhoto(this.camera.PictureSourceType.CAMERA);
  }

  openGallery() {
    this.getPhoto(this.camera.PictureSourceType.SAVEDPHOTOALBUM);
  }

  getPhoto(srcType) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: srcType
    };

    this.camera.getPicture(options).then((imageURL) => {
      alert(normalizeURL(imageURL));
      this.navCtrl.push(PhotoDetailsPage, {
        imgURL: normalizeURL(imageURL),
        parent: this
      });
    });

    this.updatePhotos();
  }

  updatePhotos(){
    this.photoProv.getAllPhotos().then(photos => {
      this.photos = photos;

    });
  }
}
