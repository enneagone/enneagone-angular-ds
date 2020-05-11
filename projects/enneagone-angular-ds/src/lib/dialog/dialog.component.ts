import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'e9-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() display: boolean;
  @Input() title: string;
  @Input() message: string;
  @Output() accept: EventEmitter<any> = new EventEmitter();
  @Output() deny: EventEmitter<any> = new EventEmitter();
  // TODO: Ajouter règle i18n
  public confirmMsg = 'Valider';
  public denyMsg = 'Annuler';
  ngOnInit(): void {
    this.display = false;
  }
}
