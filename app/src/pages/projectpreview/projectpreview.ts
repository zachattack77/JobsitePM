import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'prject-preview',
  templateUrl: 'projectpreview.html'
})
export class ProjectPreview {

  public item: String;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.item = this.navParams.get('item');
  }


  // constructor(private navParams: NavParams){
  //   this.item = this.navParams.get('item');
  // }



}
