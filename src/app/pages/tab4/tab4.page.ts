import { Result } from './../../interfaces/interfaces';
import { PhotosService } from './../../services/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  user: Result[] = [];
  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.photoService.getTopHeadlines().subscribe(response => {
      console.log(response);
      this.user = response.results;
    })
  }


}
