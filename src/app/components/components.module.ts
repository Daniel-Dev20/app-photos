import { PhotosComponent } from 'src/app/components/photos/photos.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';




@NgModule({
  declarations: [PhotosComponent, PhotoComponent],
  exports:[PhotosComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
