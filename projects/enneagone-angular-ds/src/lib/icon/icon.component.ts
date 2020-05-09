import {Component, Input} from '@angular/core';

@Component({
  selector: 'e9-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() name: string;
  @Input() color: string;
}
