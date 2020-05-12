import {Component, Input} from '@angular/core';

@Component({
  selector: 'e9-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() name: string;
  @Input() color: string;
  @Input() set size(value: ('xs' | 'sm' | 'md' | 'lg' | 'xl')) {
    switch (value) {
      case 'xs':
        this.sizeIcon = '0.7em';
        break;
      case 'sm':
        this.sizeIcon = '1.1em';
        break;
      case 'md':
        this.sizeIcon = '1.5em';
        break;
      case 'lg':
        this.sizeIcon = '2.3em';
        break;
      case 'xl':
        this.sizeIcon = '3em';
        break;
    }
  }
  public sizeIcon: string;
  constructor() {
    this.size = 'md';
  }
}
