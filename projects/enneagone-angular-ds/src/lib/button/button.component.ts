import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'e9-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  @Input() value: string;
  @Input() color = '#7C72A0';
  @Input() textColor = '#FFFFFF';
  @Input() disabled = false;
  @Input() outlined = false;
  @Input() type: 'button' | 'submit' | 'a';
  @Input() borderColor: string;
  @Input() set size(value: ('xs' | 'sm' | 'md' | 'lg' | 'xl')) {
    switch (value) {
      case 'xs':
        this.fontSize = '0.8em';
        this.width = '4.5em';
        this.height = '2em';
        break;
      case 'sm':
        this.fontSize = '0.9em';
        this.width = '4.9em';
        this.height = '2.3em';
        break;
      case 'md':
        this.fontSize = '1em';
        this.width = '6em';
        this.height = '2.2em';
        break;
      case 'lg':
        this.fontSize = '1.1em';
        this.width = '7em';
        this.height = '2.6em';
        break;
      case 'xl':
        this.fontSize = '1.3em';
        this.width = '9em';
        this.height = '3em';
        break;
    }
  }
  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  private width: string;
  private height: string;
  private fontSize: string;
  private border = '0.05em solid';
  private test = 'black';
  constructor() {
    this.type = 'button';
    this.size = 'md';
  }
  ngOnInit(): void {
    if (this.borderColor == null) {
      this.borderColor = this.color;
    }
  }
}
