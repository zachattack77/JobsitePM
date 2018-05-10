import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'photoselector-preview',
  templateUrl: 'photoselector.html'
})
export class PhotoSelector {

  public item: String;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.item = this.navParams.get('item');
  }

  goToCamera(){
    //open the camera plugin
  }

  goToPhotos(){
    //open photos from
  }

}
