import {NgModule} from '@angular/core';
import {OverviewInputComponent} from './overview-input.component';
import {InputModule} from '../../../../projects/enneagone-angular-ds/src/public-api';

@NgModule({
  declarations: [
    OverviewInputComponent
  ],
  imports: [
    InputModule
  ],
  exports: [
    OverviewInputComponent
  ]
})
export class OverviewButtonModule { }
