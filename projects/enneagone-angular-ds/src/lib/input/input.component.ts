import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'e9-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() value: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() required = false;
  @Input() filled = false;
  @Input() color = '#E0E0E0';
  @Input() labelColor = 'black';
  constructor() {
  }

  ngOnInit(): void {
  }

}
