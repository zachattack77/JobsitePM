import {Component} from '@angular/core';
import {App, NavController, NavParams} from "ionic-angular";
import {LoginPage} from '../login/login';
import {ProjectPhotosPage} from "../project-photos/project-photos";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public projects: string[];
  public item: String;

  constructor(public navCtrl: NavController, private navParams: NavParams, public app: App) {
    this.item = this.navParams.get('item');
  }

  logout() {
    this.app.getRootNav().setRoot(LoginPage);
  }

  // Add function that pushes ProjectPhotosPage with the project name onto navigation

  goToProjectPhotos(projectName){
    this.navCtrl.push(ProjectPhotosPage, {projectName : projectName});
  }
}
