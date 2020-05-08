import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { action } from '@storybook/addon-actions';

@Component({
  selector: 'e9-overview-button',
  templateUrl: './overview-button.component.html',
  styleUrls: ['./overview-button.component.css']
})
export class OverviewButtonComponent {

  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

}
