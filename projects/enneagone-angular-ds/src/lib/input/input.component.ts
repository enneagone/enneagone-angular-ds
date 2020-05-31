import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'e9-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() ngValueChange: EventEmitter<any> = new EventEmitter();
  @Input() value: NgModel;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() required = false;
  @Input() filled = false;
  @Input() color = '#E0E0E0';
  @Input() labelColor = 'black';
  @Input() type: 'password' | 'text' | 'number';
  constructor() {
    this.type = 'text';
  }

  ngOnInit(): void {
  }

  emitValueChange($event: any) {
    this.ngValueChange.emit($event);
  }
}
