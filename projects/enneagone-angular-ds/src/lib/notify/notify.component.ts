import {Component, Input, OnInit} from '@angular/core';
import {Notifier} from './notifier';
import {NotifyService} from './notify.service';

@Component({
  selector: 'e9-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {
  get notifier(): Notifier {
    return this.notifierService.notifier;
  }

  constructor(
    private notifierService: NotifyService
  ) { }

}
