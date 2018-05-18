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
      this.navCtrl.setRoot(ProjectPreview, {
        // username: "",
        // password: ""
      });
    }

}
