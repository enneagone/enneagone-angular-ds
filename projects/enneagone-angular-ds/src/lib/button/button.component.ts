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
  @Input() maxWidth: string;
  @Input() width: string;
  @Input() set size(value: ('xs' | 'sm' | 'md' | 'lg' | 'xl')) {
    switch (value) {
      case 'xs':
        this.fontSize = '0.6em';
        break;
      case 'sm':
        this.fontSize = '0.8em';
        break;
      case 'md':
        this.fontSize = '1em';
        break;
      case 'lg':
        this.fontSize = '1.2em';
        break;
      case 'xl':
        this.fontSize = '1.5em';
        break;
    }
  }
  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  public border = '0.05em solid';
  public padding = '4px 8px 4px 8px';
  public fontSize: string;
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
