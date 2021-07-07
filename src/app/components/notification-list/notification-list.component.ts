import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './../../services/notifications.service'

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  constructor(private notificationsService: NotificationsService) { }
  data = [];
  flagViewList = true;
  abc = []

  ngOnInit(): void {

    this.notificationsService.listNotifications().subscribe(
      (res : any)=> {
        this.data = res.data.invites;
        console.log(this.data);
        
      },(error:any)=>{
        console.log(error);
      }
    );
  }

  view(id){
    this.abc = this.data.filter((data)=>{
      return data.invite_id == id
    })
    
    this.flagViewList = false;
    setTimeout(()=>{
      this.notificationsService.updateNotifications(id).subscribe(
        (res : any)=> {
          if(res.data.length > 0){
            this.abc = res.data;
          }else{
            this.abc = this.abc
          }
                    
        },(error:any)=>{
          console.log(error);
        }
      );
    },3000)

    
  }

  back(){
    this.flagViewList = true;
    this.ngOnInit()

  }

}
