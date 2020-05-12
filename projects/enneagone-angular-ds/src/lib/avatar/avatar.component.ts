import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'e9-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  @Input() img: string;
  @Input() set size(value: ('xs' | 'sm' | 'md' | 'lg' | 'xl')) {
    switch (value) {
      case 'xs':
        this.sizeAvatar = '1.5em';
        break;
      case 'sm':
        this.sizeAvatar = '2.2em';
        break;
      case 'md':
        this.sizeAvatar = '3em';
        break;
      case 'lg':
        this.sizeAvatar = '5em';
        break;
      case 'xl':
        this.sizeAvatar = '12em';
        break;
    }
  }
  public sizeAvatar: string;
  public label = 'avatar';
  constructor() {
    this.size = 'sm';
  }
}
