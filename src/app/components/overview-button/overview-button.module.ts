import {NgModule} from '@angular/core';
import {OverviewButtonComponent} from './overview-button.component';
import {NotifyModule, ButtonModule} from '../../../../projects/enneagone-angular-ds/src/public-api';


@NgModule({
  declarations: [
    OverviewButtonComponent
  ],
  imports: [
    NotifyModule, ButtonModule
  ],
  exports: [
    OverviewButtonComponent
  ]
})
export class OverviewButtonModule { }
