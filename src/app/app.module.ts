import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";
import { IonicStorageModule } from "@ionic/storage";
import { PhotoProvider } from '../providers/photo/photo';
import {PhotoDetailsPage} from "../pages/photo-details/photo-details";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhotoDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhotoDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    File,
    PhotoProvider
  ]
})
export class AppModule {}
