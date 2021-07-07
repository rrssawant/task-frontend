import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from './../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http:HttpClient) { }
  

  listNotifications(){
    return  this.http.get(environment.apiBaseUrl + '/notifications-data');
  }

  updateNotifications(id){
    return  this.http.get(environment.apiBaseUrl + '/updated-notifications-data?id='+id);
  }
}
