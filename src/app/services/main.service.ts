import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
  
  listData :[];

  getCities(){
    return  this.http.get(environment.apiBaseUrl + '/cities');
  }

  getData():any{
    return  this.http.get(environment.apiBaseUrl + '/data');

  }
}
