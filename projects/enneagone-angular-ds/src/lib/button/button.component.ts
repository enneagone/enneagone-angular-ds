import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'e9-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() value: string;
  @Input() color: string;
  @Input() disabled: boolean;

  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.disabled = false;
    // TODO: Set up les couleurs par defaut sur la lib
    this.color = '#7C72A0';
  }
  ngOnInit(): void {
  }

}
