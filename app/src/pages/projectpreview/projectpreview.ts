import { Component } from '@angular/core';
import {NavController, NavParams, App} from "ionic-angular";
import {HomePage} from "../home/home";

@Component({
  selector: 'prject-preview',
  templateUrl: 'projectpreview.html'
})
export class ProjectPreview {

  public item: String;
  constructor(public navCtrl: NavController, private navParams: NavParams, public app: App) {
    this.item = this.navParams.get('item');
  }
  logout()
  {
    this.app.getRootNav().setRoot(HomePage);
  }
}
