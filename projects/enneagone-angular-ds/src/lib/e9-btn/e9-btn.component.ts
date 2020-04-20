import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-e9-btn',
  templateUrl: './e9-btn.component.html',
  styleUrls: ['./e9-btn.component.css']
})
export class E9BtnComponent implements OnInit {
  @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
