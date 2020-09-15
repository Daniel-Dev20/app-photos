import { Result } from './../../interfaces/interfaces';
import { PhotosService } from './../../services/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  photos: Result[] = [];

  constructor(private photosService:PhotosService) {

  }

 ngOnInit(){
   this.photosService.getSearch().subscribe(
     response => {
       console.log("photos", response);
       this.photos = response;
     }
   )
   
 }

}
