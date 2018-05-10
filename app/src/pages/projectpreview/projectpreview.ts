import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {PhotoSelector} from "../phototselector/photoselector";

@Component({
  selector: 'project-preview',
  templateUrl: 'projectpreview.html'
})
export class ProjectPreview {

  public item: String;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.item = this.navParams.get('item');
  }



  goToPhotoSelector(){
    this.navCtrl.push(PhotoSelector,{

    });
  }
  // constructor(private navParams: NavParams){
  //   this.item = this.navParams.get('item');
  // }



}
