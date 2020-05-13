import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'e9-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {

  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

}
