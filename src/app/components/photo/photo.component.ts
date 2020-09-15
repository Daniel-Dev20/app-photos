import { DataLocalService } from './../../services/data-local.service';
import { Result } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
@Input() photo: Result;
@Input() enFavoritos;
  constructor(
      private iab: InAppBrowser, 
      private actionSheetController:ActionSheetController,
      private socialSharing: SocialSharing, 
      private dataLocarService:DataLocalService,

    ) { }

  ngOnInit() {
    console.log("favoritos", this.enFavoritos);
  }
  openPhoto(){
    console.log('URL:')
    const browser = this.iab.create(this.photo.links.html, '_system');
  }
  async lanzarMenu(){
    let guardarBorrarBtn;
    if(this.enFavoritos){
      guardarBorrarBtn = {
        text: 'Delete Favorite',
        icon: 'trash',
        handler: () => {
          console.log('Delete Favorite clicked');
          this.dataLocarService.borrarNoticia(this.photo);
        }
      };
    }else{
      guardarBorrarBtn = {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
          this.dataLocarService.savePhotos(this.photo);
        }
      };
    }
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.photo.urls.regular
            
          )
        }
      }, 
      guardarBorrarBtn,
       {
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
