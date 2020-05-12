import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'e9-sizing-button',
  templateUrl: './sizing-button.component.html',
  styleUrls: ['./sizing-button.component.css']
})
export class SizingButtonComponent {

  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

}
