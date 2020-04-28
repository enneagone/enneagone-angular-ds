import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'e9-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() value: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() readOnly: boolean;
  @Input() required: boolean;
  constructor() {
    this.disabled = false;
    this.readOnly = false;
    this.required = false;
    this.placeholder = '';
  }

  ngOnInit(): void {
  }

}
