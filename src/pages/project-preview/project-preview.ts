import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'project-preview',
  templateUrl: 'project-preview.html'
})
export class ProjectPreviewPage {

  public item: String;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.item = this.navParams.get('item');
  }


  // constructor(private navParams: NavParams){
  //   this.item = this.navParams.get('item');
  // }



}
