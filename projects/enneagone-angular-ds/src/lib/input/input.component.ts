import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, DefaultValueAccessor, NgModel} from '@angular/forms';
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'e9-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements ControlValueAccessor, AfterViewInit {
  @Output() ngValueChange: EventEmitter<any> = new EventEmitter();
  @Input() value: NgModel;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() required = false;
  @Input() filled = false;
  @Input() color = '#E0E0E0';
  @Input() labelColor = 'black';
  @Input() type: 'password' | 'text' | 'number';
  @Input() formControlName: string;
  @ViewChild(DefaultValueAccessor) valueAccessor: DefaultValueAccessor;
  constructor() {
    this.type = 'text';
  }

  delegatedMethodCalls = new ReplaySubject<(_: ControlValueAccessor) => void>();
  emitValueChange({$event}: { $event: any }) {
    this.ngValueChange.emit($event);
  }

  ngAfterViewInit(): void {
    this.delegatedMethodCalls.subscribe(fn => fn(this.valueAccessor));
  }

  registerOnChange(fn: (_: any) => void): void {
    this.delegatedMethodCalls.next(valueAccessor => valueAccessor.registerOnChange(fn));
  }
  registerOnTouched(fn: () => void): void {
    this.delegatedMethodCalls.next(valueAccessor => valueAccessor.registerOnTouched(fn));
  }

  setDisabledState(isDisabled: boolean): void {
    this.delegatedMethodCalls.next(valueAccessor => valueAccessor.setDisabledState(isDisabled));
  }

  writeValue(obj: any): void {
    this.delegatedMethodCalls.next(valueAccessor => valueAccessor.writeValue(obj));
  }
}
