import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {PhotoSelector} from "../phototselector/photoselector";
import {HttpClient} from "@angular/common/http";

//get data from the php page
interface User{
  projectsPhp: string[];
}

@Component({
  selector: 'project-preview',
  templateUrl: 'projectpreview.html'
})
export class ProjectPreview {

  public projects: string[];
  // public username: string;


  constructor(public navCtrl: NavController, private navParams: NavParams, public http: HttpClient) {
    // this.username = this.navParams.get('username');
    let url = "http://pvashchuk.greenriverdev.com/328/jobsite/job.php";

    this.http.post<User>(url, {
    }).subscribe(
      (res) => {
        console.log(res);// on Success
        this.projects = res.projectsPhp;
      },
      err => {
        alert('Error occured'); // on Error
      }
    );

  }

  goToPhotoSelector(project:string){
    this.navCtrl.push(PhotoSelector,{
      projectName: project
    });
  }



}
