import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";


/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const STORAGE_KEY = 'photos';

@Injectable()
export class PhotoProvider {

  visibility: string;
  keywords: string[];
  description: string;

  constructor(public storage: Storage) {
  }

  savePhoto(photoURL){
    return this.getAllPhotos().then(result => {
      if(result){
        result.push(photoURL);
        alert("PHOTO LOCATION IS " + photoURL);
        return this.storage.set(STORAGE_KEY, result);
      }else{
        return this.storage.set(STORAGE_KEY, [photoURL]);
      }
    });
  }



  // Returns a promise when photos are retrieved
  getAllPhotos() {
    return this.storage.get(STORAGE_KEY);
  }
}
