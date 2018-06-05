import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PhotoProvider} from "../../providers/photo/photo";

/**
 * Generated class for the PhotoDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-photo-details',
  templateUrl: 'photo-details.html',
})
export class PhotoDetailsPage {
  imgURL: string;
  parent: any;
  visibility: any;
  keywords: any[];
  subcontractors: any[];
  description: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public photoProv: PhotoProvider) {
    this.imgURL = navParams.get('imgURL');
    this.parent = this.navParams.get('parent');
  }

  save(){
    this.photoProv.savePhoto(this.imgURL).then(result => {
      alert("Photo Saved!");
      this.parent.updatePhotos();
      this.navCtrl.pop();
    }).catch(err => {
      alert("Photo not saved");
    });
  }

}
