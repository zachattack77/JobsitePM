import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from "@angular/forms";
import {HttpHeaders, HttpClientModule} from "@angular/common/http";
import {ProjectPreview} from "../projectpreview/projectpreview";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any = {};

  formgroup:FormGroup;
  email:AbstractControl;
  password:AbstractControl;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formbuilder: FormBuilder,
              //public http: HttpClientModule
  ) {

    this.formgroup = this.formbuilder.group({
      email:['',Validators.required,],
      password:['',Validators.required]
    });
    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];


  }

  goToProjects() {
      this.navCtrl.push(ProjectPreview, {
        item: "HELLO"

      });
    }

//functions
  postData()
  {

  }
  // {
  //   var link = "http://www.pvashchuk.greenriverdev.com/328/jobsite/job.php";
  //   var myData = JSON.stringify({email: this.data.email});
  //
  //   this.http.post(link,myData)
  //     .subscribe(data=>{
  //       this.data.response = data["_body"];
  //       console.log(this.data.response);
  //     }, error => {
  //       console.log("Oooops!");
  //     });
  // }

}
