import { RespuestaTopHeadlines } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {} from '../services/photos.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }
  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>(`https://api.unsplash.com/search/photos?page=20&query=office&client_id=hu6HZ0LLXlyvIGx-_3suReTkYcEvCM68qX8BN2u1vB8`);
  }

  getSearch(){
    return this.http.get<any[]>(`https://api.unsplash.com/collections?page=8&query=office&client_id=hu6HZ0LLXlyvIGx-_3suReTkYcEvCM68qX8BN2u1vB8`);
  }
  getToPages(){
    return this.http.get<any>(`https://api.unsplash.com/search/photos?page=25&query=office&client_id=hu6HZ0LLXlyvIGx-_3suReTkYcEvCM68qX8BN2u1vB8`);
  }
  
}
