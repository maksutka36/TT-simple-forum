import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  
  private notification = new Subject<string>();

  constructor() { }

  sendNotification(message: string): void {
    this.notification.next(message);
  }

  getNotification(): Observable<string> {
    return this.notification.asObservable();
  }
}
