import { Result } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PathLocationStrategy } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  photos: Result[] = [];
  constructor(private storage: Storage, private toastController: ToastController) {
    this.loadPhotos();
   }
  async savePhotos(photo:Result){
    const existe = this.photos.find(photo2 => photo2.id === photo.id);
    if(!existe){
        this.photos.unshift(photo);
        this.storage.set('favorites', this.photos);
    }
    this.presentToast('Add to favorite');
    
  }
  async loadPhotos(){
  const favorites =  await this.storage.get('favorites');
    this.photos = favorites;
    if(favorites){
      this.photos = favorites;
    }else{
      this.photos = [];
    }
  }
  borrarNoticia(photo: Result){
    this.photos = this.photos.filter(photo2 => photo2.id !== photo.id);
    this.storage.set('favorites', this.photos);
    this.presentToast('Delate to favorite');
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }
}
