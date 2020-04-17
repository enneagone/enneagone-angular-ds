import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'alx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() label: string;
  @Input() disabled: boolean;
  @Output() onClick = new EventEmitter<any>();

  constructor() {
  }

  onClickButton(event) {
    this.onClick.emit(event);
  }
}
