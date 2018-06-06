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
  constructor(public storage: Storage) {
  }

  savePhoto(projectName, photoURL){
    return this.getAllPhotos(projectName).then(result => {
      if(result){
        result.push(photoURL);
        alert("PHOTO LOCATION IS " + photoURL);
        return this.storage.set(STORAGE_KEY, result);
      }else{
        return this.storage.set(STORAGE_KEY, [photoURL]);
      }
    });
  }

  saveData(photoURL, visibility, keywords, subcontractors, description){
    this.getPhotoData(photoURL).then(result => {
      let data = {visibility, keywords, subcontractors, description};
      return this.storage.set(photoURL, data);
    });
  }


  // Returns a promise when photos are retrieved
  getAllPhotos(projectName) {
    return this.storage.get(projectName);
  }

  getPhotoData(photoURL){
    return this.storage.get(photoURL);
  }
}
