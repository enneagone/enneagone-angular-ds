import { Component, OnInit } from '@angular/core';
import {NotifyService} from '../../../../projects/enneagone-angular-ds/src/public-api';

@Component({
  selector: 'e9-notifier-story-book',
  templateUrl: './notifier-story-book.component.html',
  styleUrls: ['./notifier-story-book.component.css'],
})
export class NotifierStoryBookComponent{
  messageText = 'This is a demo notification!';
  messageType = 1;
  constructor(
    private notifier: NotifyService
  ) { }
  submitMessage() {
    let messageType: number = null;
    messageType = this.messageType;
    this.notifier.notify(
      this.messageText,
      messageType,
    );
  }

}
