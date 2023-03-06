import { Component, OnInit } from '@angular/core';
import { JokesStorageService } from '../jokes-storage.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications: string[] = [];

  constructor(
    private jokesService: JokesStorageService
  ){}

  ngOnInit(): void {
    this.jokesService.getNotification()
      .subscribe(res => {
        this.notifications.push(res);
        setTimeout(() => this.notifications.shift(), 4000);
      });
  }
}
