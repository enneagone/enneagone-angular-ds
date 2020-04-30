import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'e9-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() name: string;
  @Input() color: string;
  constructor() { }

  ngOnInit(): void {
  }

}
