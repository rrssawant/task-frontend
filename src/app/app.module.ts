import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsService } from './services/notifications.service';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
// import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [ 
    AppComponent, NotificationListComponent,
    // NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
