import {NgModule} from '@angular/core';
import {OverviewDialogComponent} from './overview-dialog.component';
import {
  DialogModule,
  ButtonModule
} from '../../../../projects/enneagone-angular-ds/src/public-api';

@NgModule({
  declarations: [
    OverviewDialogComponent
  ],
  imports: [
    DialogModule,
    ButtonModule
  ],
  exports: [
    OverviewDialogComponent
  ]
})
export class OverviewButtonModule { }
