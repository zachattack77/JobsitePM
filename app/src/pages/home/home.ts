import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormGroup, Validators, AbstractControl, FormBuilder} from "@angular/forms";
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
              public formbuilder: FormBuilder
  ) {

    this.formgroup = this.formbuilder.group({
      email:['', Validators.compose([Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")])],
      password:['',Validators.required]
    });
    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];


  }

//functions
login()
{
  if(this.formgroup.controls.email.value == "alex@gmail.com"&& this.formgroup.controls.password.value == "password")
  {
    this.navCtrl.push(ProjectPreview);
  }
  else
  {
    alert("Login is invalid");
  }
}

}
