import { Result } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  @Input() photos: Result[] = [];
  @Input() enFavoritos = false;
  constructor() { }

  ngOnInit() {}

}
