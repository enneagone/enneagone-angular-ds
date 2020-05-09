import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'e9-overview-dialog',
  templateUrl: './overview-dialog.component.html',
  styleUrls: ['./overview-dialog.component.css']
})
export class OverviewDialogComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;

  @Output() accept: EventEmitter<any> = new EventEmitter();
  @Output() deny: EventEmitter<any> = new EventEmitter();

  public diplayDialog: boolean;
  ngOnInit(): void {
    this.diplayDialog = false;
  }
  accepted() {
    this.accept.emit();
    this.diplayDialog = false;
  }
  denied() {
    this.deny.emit();
    this.diplayDialog = false;
  }
}
