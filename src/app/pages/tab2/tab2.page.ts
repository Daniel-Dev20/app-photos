import { Result } from './../../interfaces/interfaces';
import { PhotosService } from './../../services/photos.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  photos: Result[] = [];
  textoBuscar = "";
  constructor(

    private searchPhotos: PhotosService, 
    private actionSheetController: ActionSheetController, 
    private socialSharing: SocialSharing, 
    private dataLocarService:DataLocalService,
    private dataLocalService: DataLocalService
    
    )  {}
  ngOnInit(){
    this.searchPhotos.getTopHeadlines().subscribe(
      response => {
        console.log(response);
        this.photos = response.results;
      }
    )
  }
  Buscar(event){
   this.textoBuscar = event.detail.value;
  }

  async lanzarMenu(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            
          )
        }
      }, 
       {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
         
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
