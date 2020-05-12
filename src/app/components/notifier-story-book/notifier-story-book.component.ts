import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NotifyService} from '../../../../projects/enneagone-angular-ds/src/public-api';
import {number} from '@storybook/addon-knobs';

@Component({
  selector: 'e9-notifier-story-book',
  templateUrl: './notifier-story-book.component.html',
  styleUrls: ['./notifier-story-book.component.css'],
})
export class NotifierStoryBookComponent {

  @Output() notifEmitted: EventEmitter<any> = new EventEmitter();

  messageSuccess = 'Success notification !';
  messageFail = 'Failed notification !';
  constructor(
    private notifier: NotifyService
  ) { }
  submitMessage(type: number) {
    const message = type === 1 ? this.messageSuccess : this.messageFail;
    this.notifier.notify(
      message,
      type,
    );
    this.notifEmitted.emit();
  }

}
