import {Component} from '@angular/core';
import {NavController, NavParams, normalizeURL, Platform} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {File} from "@ionic-native/file";
import {PhotoDetailsPage} from "../photo-details/photo-details";
import {PhotoProvider} from "../../providers/photo/photo";


@Component({
  selector: 'page-project-photos',
  templateUrl: 'project-photos.html'
})
export class ProjectPhotosPage {
  projectName: string[];
  photos: string[];
  photoData: string[];

  constructor(public navCtrl: NavController, public params: NavParams, public camera: Camera, public file: File, public photoProv: PhotoProvider, public platform: Platform) {
    this.platform.ready().then(result => {
      this.updatePhotos();
    });

    this.projectName = this.params.get("projectName");
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

  updatePhotos() {
    this.photoProv.getAllPhotos(this.projectName).then((photos: string[]) => {
      for(var i = 0; i < photos.length; i++){
        this.photos[photos[i]] = this.getPhotoData(photos[i]);
      }
    });
  }

  getPhotoData(photoURL) {
    this.photoProv.getPhotoData(photoURL).then(result => {
      return result;
    });
  }

}
