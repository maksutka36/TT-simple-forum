import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications: string[] = [];
  jokeSubscription: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.jokeSubscription = this.notificationService
      .getNotification()
      .subscribe((res) => {
        this.notifications.push(res);
        setTimeout(() => this.notifications.shift(), 4000);
      });
  }

  ngOnDestroy(): void {
    this.jokeSubscription.unsubscribe();
  }
}
