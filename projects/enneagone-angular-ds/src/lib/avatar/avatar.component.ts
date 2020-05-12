import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'e9-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() img: string;
  @Input() set size(value: ('xs' | 'sm' | 'md' | 'lg' | 'xl')) {
    switch (value) {
      case 'xs':
        this.width = '1.5em';
        this.height = '1.5em';
        break;
      case 'sm':
        this.width = '2.2em';
        this.height = '2.2em';
        break;
      case 'md':
        this.width = '3em';
        this.height = '3em';
        break;
      case 'lg':
        this.width = '5em';
        this.height = '5em';
        break;
      case 'xl':
        this.width = '12em';
        this.height = '12em';
        break;
    }
  }
  public width: string;
  public height: string;
  public label = 'avatar';
  constructor() {
    this.size = 'sm';
  }

  ngOnInit(): void {
  }

}
