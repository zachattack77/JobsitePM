import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'photoselector-preview',
  templateUrl: 'photoselector.html'
})
export class PhotoSelector {

  public name: String;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.name = this.navParams.get('projectName');
  }

  goToCamera(){
    //open the camera plugin
  }

  goToPhotos(){
    //open photos from
  }

}
