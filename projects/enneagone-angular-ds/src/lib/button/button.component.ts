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
  }
  ngOnInit(): void {
  }

}
