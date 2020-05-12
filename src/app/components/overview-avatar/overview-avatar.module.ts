import {NgModule} from '@angular/core';
import {OverviewAvatarComponent} from './overview-avatar.component';
import {AvatarModule} from '../../../../projects/enneagone-angular-ds/src/public-api';

@NgModule({
  declarations: [
    OverviewAvatarComponent
  ],
  imports: [
    AvatarModule
  ],
  exports: [
    OverviewAvatarComponent
  ]
})
export class OverviewButtonModule { }
