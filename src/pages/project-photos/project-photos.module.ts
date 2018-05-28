import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPhotosPage } from './project-photos';

@NgModule({
  declarations: [
    ProjectPhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPhotosPage),
  ],
})
export class ProjectPhotosPageModule {}
